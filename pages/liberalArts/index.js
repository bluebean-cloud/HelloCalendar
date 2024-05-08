// pages/liberalArts/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showFilter: [false, false, false],
    courses: {
      "1": {
        name: "“自由诗篇”--Maniac街舞社15周年专场演出",
        state: "预告",
        type: "美育",
        introduce: "Maniac",
        campus: "全部校区",
        time: "2024-05-19 19:00-21:00",
        location: "咏曼剧场",
      },
      "2": {
        name: "《电磁兼容技术前沿》王晓云首席课堂",
        state: "预告",
        type: "德育",
        introduce: "六系害了你",
        campus: "全部校区",
        time: "2024-05-15 19:00-20:35",
        location: "学院路校区新主楼F101",
      },
      "3": {
        name: "第21届飞豹杯航空航天知识竞赛决赛",
        state: "可选",
        type: "德育",
        introduce: "答题？",
        campus: "全部校区",
        time: "2024-05-11 14:00-16:00",
        location: "沙河校区咏曼剧场",
      },
      "4": {
        name: "春趣·北航学生民乐团沙龙",
        state: "可选",
        type: "美育",
        introduce: "哈哈哈",
        campus: "全部校区",
        time: "2024-05-10 19:30-21:00",
        location: "晨兴剧场",
      },
      "5": {
        name: "美国科技哲学与科技政策：关键历史演变与当代发展问题",
        state: "选课结束",
        type: "美育",
        introduce: "没听，不知道",
        campus: "全部校区",
        time: "2024-05-08 15:00-17:00",
        location: "北航人文讲堂",
      },
      "6": {
        name: "“计联世界，智算未来”北航计算机文化月闭幕式暨就业育人创新发展论坛",
        state: "已开课",
        type: "德育",
        introduce: "我是计院的，但是我没时间去看",
        campus: "全部校区",
        time: "2024-04-28 14:15-16:15",
        location: "新主楼第二报告厅",
      }
    },
    filter_campus: "全部校区",
    filter_type: "全部类型",
    filter_state: "全部状态"
  },
  clickFilter: function(event) {
    let i = event.currentTarget.dataset.id
    this.data.showFilter[i] = !this.data.showFilter[i]
    this.setData({
      'showFilter': this.data.showFilter
    })
  },
  changeFilter: function(event) {
    let filter_campus = event.currentTarget.dataset.campus || this.data.filter_campus
    let filter_type = event.currentTarget.dataset.type || this.data.filter_type
    let filter_state = event.currentTarget.dataset.state || this.data.filter_state
    this.setData({
      'filter_campus': filter_campus,
      'filter_type': filter_type,
      'filter_state': filter_state
    })
    let filter_courses = {}
    for (let key in this.data.courses) {
      let item = this.data.courses[key]
      if (filter_campus !== '全部校区' && item.campus !== filter_campus) {
        continue
      } else if (filter_type !== '全部类型' && item.type !== filter_type) {
        continue
      } else if (filter_state !== '全部状态' && item.type !== filter_state) {
        continue
      }
      filter_courses[key] = item
    }
    this.setData({
      filter_courses: filter_courses
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({filter_courses: this.data.courses})
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