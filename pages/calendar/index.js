// pages/calendar/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courses: {
      1: {
        name: "计算机科学方法论",
        day: 1,
        teacher: "杨海龙",
        weeks: [1,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
        credit: 2,
        location: "主南409",
        time: 3,
        length: 2,
      },
      2: {
        name: "计算机网络",
        day: 1,
        teacher: "罗洪斌",
        weeks: [1,2,3,4,5,6,7,8],
        credit: 2,
        location: "主南405",
        time: 6,
        length: 2
      },
      3: {
        name: "德国概况（汉语授课）",
        day: 2,
        teacher: "贺克",
        weeks: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
        credit: 2,
        location: "（三）202",
        time: 1,
        length: 2
      },
      4: {
        name: "开源软件基础与实践",
        day: 2,
        teacher: "谭鑫",
        weeks: [1,2,3,4,5,6,7,9,10,11,12,13,14,15],
        credit: 2,
        location: "（三）130",
        time: 3,
        length: 2
      },
      5: {
        name: "信息设计",
        day: 2,
        teacher: "王韫",
        weeks: [1,2,3,4,5,6,7,8,9,11],
        credit: 2.5,
        location: "本科生专业教学实验室（新主楼B511）",
        time: 6,
        length: 4
      }, 
      6: {
        name: "计算机网络",
        day: 3,
        teacher: "罗洪斌",
        weeks: [1,2,3,4,5,6,7,8],
        credit: 2,
        location: "主南405",
        time: 1,
        length: 2
      },
      7: {
        name: "学科技术前沿讲座",
        day: 4,
        teacher: "李波",
        weeks: [1,2,3,4,5,6,7,8],
        credit: 1,
        location: "主M201",
        time: 1,
        length: 2
      },
      8: {
        name: "体育（6）",
        day: 4,
        teacher: "周若夫",
        weeks: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
        credit: 0.5,
        location: "室内跑廊",
        time: 3,
        length: 1
      },
      9: {
        name: "软甲工程",
        day: 5,
        teacher: "罗杰",
        weeks: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
        credit: 2,
        location: "（三）101",
        time: 6,
        length: 2
      },
      10: {
        name: "计算机网络实验",
        day: 7,
        teacher: "谷云超",
        weeks: [5,7,8,9,11,12],
        credit: 1,
        location: "计算机教学实验中心（新主楼F330）",
        time: 11,
        length: 4
      }
    },
    show_week: true,
    week_selector_range: [
      '2023-2024 春季 第一周',
      '2023-2024 春季 第二周',
      '2023-2024 春季 第三周',
      '2023-2024 春季 第四周',
      '2023-2024 春季 第五周',
      '2023-2024 春季 第六周',
      '2023-2024 春季 第七周',
      '2023-2024 春季 第八周',
      '2023-2024 春季 第九周',
      '2023-2024 春季 第十周',
      '2023-2024 春季 第十一周',
      '2023-2024 春季 第十二周',
      '2023-2024 春季 第十三周',
      '2023-2024 春季 第十四周',
      '2023-2024 春季 第十五周',
      '2023-2024 春季 第十六周',
      '2023-2024 春季 第十七周',
      '2023-2024 春季 第十八周',
    ],
    courses_index: {
      1: {
        index: 1,
        begin: "08:00",
        end: "08:45"
      },
      2: {
        index: 2,
        begin: "08:50",
        end: "09:35"
      },
      3: {
        index: 3,
        begin: "09:50",
        end: "10:35"
      },
      4: {
        index: 4,
        begin: "10:40",
        end: "11:25"
      },
      5: {
        index: 5,
        begin: "11:30",
        end: "12:15"
      },
      6: {
        index: 6,
        begin: "14:00",
        end: "14:45"
      },
      7: {
        index: 7,
        begin: "14:50",
        end: "15:35"
      },
      8: {
        index: 8,
        begin: "15:50",
        end: "16:35"
      },
      9: {
        index: 9,
        begin: "16:40",
        end: "17:25"
      },
      10: {
        index: 10,
        begin: "17:30",
        end: "18:15"
      },
      11: {
        index: 11,
        begin: "19:00",
        end: "19:45"
      },
      12: {
        index: 12,
        begin: "19:50",
        end: "20:35"
      },
      13: {
        index: 13,
        begin: "20:40",
        end: "21:25"
      },
      14: {
        index: 14,
        begin: "21:30",
        end: "22:15"
      },
      15: {
        index: 15,
        begin: "22:15",
        end: "00:00"
      },
      16: {
        index: 16,
        begin: "00:00",
        end: "08:00"
      }
    },
    week_title: {
      1: {
        index: 0,
        title: "一"
      },
      2: {
        index: 1,
        title: "二"
      },
      3: {
        index: 2,
        title: "三"
      },
      4: {
        index: 3,
        title: "四"
      },
      5: {
        index: 4,
        title: "五"
      },
      6: {
        index: 5,
        title: "六"
      },
      7: {
        index: 6,
        title: "七"
      },
    }
  },
  bindPickerChange: function(e) {
    let cur_week = e.detail.value
    console.log(cur_week)
    this.filterCourses(cur_week)
    this.setData({
      cur_week: cur_week
    })
    this.updateDate(this.data.cur_week)
  },
  filterCourses: function(cur_week) {
    if (typeof cur_week === 'string') {
      cur_week = parseInt(cur_week)
    }
    let filter_courses = {}
    for (let key in this.data.courses) {
      let item = this.data.courses[key]
      if (item.weeks.includes(cur_week + 1)){
        filter_courses[key] = item
        // console.log(item)
      }
    }
    this.setData({
      filter_courses: filter_courses,
    })
  },
  updateDate: function(cur_week) {
    let term_begin = new Date(2024, 1, 26)
    let cur_month = new Date(term_begin.getTime() + cur_week * 7 * 24 * 60 * 60 * 1000);
    for (let key in this.data.week_title) {
      let item = this.data.week_title[key]
      let cal_day = new Date(term_begin.getTime() + cur_week * 7 * 24 * 60 * 60 * 1000 + item['index'] * 1000 * 60 * 60 * 24)
      item['date'] = cal_day.getDate()
      item['left'] = 12.5 + item['index'] * 12.5
    }
    this.setData({
      week_title: this.data.week_title,
      cur_month: cur_month.getMonth(),
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let cur_day = new Date()
    let term_begin = new Date(2024, 1, 26)
    // 计算得到当前的周数
    let cur_week = Math.floor((cur_day.getTime() - term_begin.getTime()) / (1000 * 60 * 60 * 24 * 7))
    this.updateDate(cur_week)
    this.filterCourses(cur_week) // 本周显示的课表
    let column_line = {}
    let row_line = {}
    for (let i = 1; i <= 7; i++) column_line[i] = { left: 12.5 * i - 0.2 }
    for (let i = 1; i <= 17; i++) row_line[i] = { top: 10 * i + 21 }
    for (let key in this.data.courses_index) {
      let item = this.data.courses_index[key]
      item['top'] = 21 + (item.index - 1) * 10
      if (item['index'] > 5) {
        item['top'] += 10
      }
    }
    
    this.setData({
      column_lines: column_line,
      row_lines: row_line,
      cur_week: cur_week,
      courses_index: this.data.courses_index,
    })
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