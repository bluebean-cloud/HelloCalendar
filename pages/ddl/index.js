// pages/ddl/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_form: false,
    input_title: "",
    content: "",
  },
  createDDL: function() {
    let title = this.data.input_title
    let date = this.data.date
    let time = this.data.time
    let content = this.data.content
    let stored_ddl = wx.getStorageSync('storedDDL')
    let cur_date_ddl = stored_ddl[date]
    if (title === "" || /^\s*$/.test(title)) {
      wx.showToast({
        title: '标题不可为空',
        icon: 'error',
        duration: 1000,
        mask: false,
      })
      return
    }
    if (cur_date_ddl === undefined) {
      cur_date_ddl = []
    }
    cur_date_ddl.push({
      title: title,
      date: date,
      time: time,
      content: content
    })
    cur_date_ddl.sort((a, b) => {
      let a_h = parseInt(a.time.split(':')[0])
      let a_m = parseInt(a.time.split(':')[1])
      let b_h = parseInt(b.time.split(':')[0])
      let b_m = parseInt(b.time.split(':')[1])
      if (a_h !== b_h) {
        return a_h - b_h
      } else {
        return a_m - b_m
      }
    })
    stored_ddl[date] = cur_date_ddl
    wx.setStorageSync('storedDDL', stored_ddl)
    date = new Date() // string -> Date
    let all_ddl = this.updateDDL()
    let to_be_finished_ddl = all_ddl[0]
    let finished_ddl = all_ddl[1]
    this.setData({
      input_title: "",
      date: this.formatDateTime(date)[0],
      time: this.formatDateTime(date)[1],
      content: "",
      show_form: false,
      to_be_finished_ddl: to_be_finished_ddl,
      finished_ddl: finished_ddl,
    })
  },
  clickDDLButton: function() {
    this.setData({
      show_form: true
    })
  },
  bindTitleInput: function(e) {
    this.setData({
      input_title: e.detail.value
    })
  },
  cancelCreate: function() {
    let date = new Date()
    this.setData({
      input_title: "",
      date: this.formatDateTime(date)[0],
      time: this.formatDateTime(date)[1],
      content: "",
      show_form: false
    })
  },
  formatDateTime: function (date) {
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    m = m < 10 ? ('0' + m) : m
    let d = date.getDate()
    d = d < 10 ? ('0' + d) : d
    let h = date.getHours()
    h = h < 10 ? ('0' + h) : h
    let minute = date.getMinutes()
    minute = minute < 10 ? ('0' + minute) : minute
    let second=date.getSeconds()
    second=second < 10 ? ('0' + second) : second
    let format_date = y + '-' + m + '-' + d
    let format_time = h + ':' + minute
    return [format_date, format_time]; 
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindContentInput: function(e) {
    this.setData({
      content: e.detail.value
    })
  },
  sortByDate: function(dict, flag) {
    let keys = Object.keys(dict)
    let sorted = []
    keys.sort((a, b) => {
      let dateA = new Date(a);
      let dateB = new Date(b);
      return flag * (dateA - dateB);
    })
    for (let key of keys) {
      sorted.push(dict[key])
    }
    return sorted
  },
  updateDDL: function() {
    let date = new Date()
    let stored_ddl = wx.getStorageSync('storedDDL')
    if (stored_ddl === "") {
      stored_ddl = {}
      wx.setStorageSync('storedDDL', stored_ddl)
    }
    let to_be_finished_ddl = {}
    let finished_ddl = {}
    for (let key in stored_ddl) { // 将 ddl 分类，分为已完成和未完成
      let arr = stored_ddl[key]
      for (let item of arr) {
        let ddl_time = new Date(item.date + 'T' + item.time + ':00')
        if (ddl_time.getTime() > date.getTime()) {
          if (to_be_finished_ddl[item.date] === undefined) {
            to_be_finished_ddl[item.date] = []
          }
          to_be_finished_ddl[item.date].push(item)
        } else {
          if (finished_ddl[item.date] === undefined) {
            finished_ddl[item.date] = []
          }
          finished_ddl[item.date].push(item)
        }
      }
    }
    return [this.sortByDate(to_be_finished_ddl, 1), this.sortByDate(finished_ddl, -1)]
  },
  updateDDLCount: function() {
    let all_ddl = this.data.to_be_finished_ddl
    let date = new Date()
    for (let item of all_ddl) {
      for (let ddl of item) {
        let ddl_date = new Date(ddl['date']+"T"+ddl['time'])
        const diff = ddl_date.getTime() - date.getTime();
        if (diff <= 0) {
          this.onLoad()
          return
        } else if (diff < 1000 * 60 * 60 * 24) { // 少于一天
          const hours = Math.floor(diff / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);
          const formatted_time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
          ddl['count'] = formatted_time
        } else {
          const daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24));
          ddl['count'] = `${daysDiff} 天`;
        }
        ddl['diff'] = diff
      }
    }
    this.setData({
      to_be_finished_ddl: all_ddl
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    let date = new Date()
    let format_time = this.formatDateTime(date)
    let all_ddl = this.updateDDL()

    // ddl的格式：[[{},{}], [{},{}], [{}]] 按日期归类并排序
    let to_be_finished_ddl = all_ddl[0]
    let finished_ddl = all_ddl[1]

    this.setData({
      date: format_time[0],
      time: format_time[1],
      to_be_finished_ddl: to_be_finished_ddl,
      finished_ddl: finished_ddl
    })

    this.updateDDLCount()
    setInterval(this.updateDDLCount, 1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})