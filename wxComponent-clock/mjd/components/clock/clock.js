// components/clock.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  properties: {
    // 背景颜色
    backgroundColor: {           
      type: String,     
      value: 'white'
    },
    // 剩余时间
    remainTime: {
      type: String,
      value: "0"
    },
    // 倒计时前文案
    title: {
      type: String,
      value: '距结束 '
    },
    // 弹窗取消按钮文字
    lineHeight: {
      type: null,
      value: 56
    },
    // 弹窗取消按钮文字
    width: {
      type: null,
      value: 240
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    countTime:{ hours: "00", minutes: "00", seconds: "00" }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    timeInit: function (remainTimeStr){
      let remainTime = parseInt(remainTimeStr) * 1000
      //计算出小时数
      let hours = Math.floor(remainTime / (3600 * 1000))
      //计算相差分钟数
      let leave2 = remainTime % (3600 * 1000)        //计算小时数后剩余的毫秒数
      let minutes = Math.floor(leave2 / (60 * 1000))

      //计算相差秒数
      let leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数
      let seconds = Math.round(leave3 / 1000)

      let obj = {
        hours,
        minutes,
        seconds
      }
      for (var item in obj) {
        if (String(obj[item]).length == 1) {
          obj[item] = '0' + obj[item]
        } else {
          obj[item] = '' + obj[item]
        }
      }
      return obj
    },
      // 计算时间差，并返回{小时，分钟，秒数}的对象,deadLineTime为时间戳格式
    createCounter:function (that,remainTimeStr){
      let remainTime = parseInt(remainTimeStr)*1000
      setInterval(function(){
        remainTime = remainTime - 1000
        //计算出小时数
        let hours = Math.floor(remainTime / (3600 * 1000))
        //计算相差分钟数
        let leave2 = remainTime % (3600 * 1000)        //计算小时数后剩余的毫秒数
        let minutes = Math.floor(leave2 / (60 * 1000))

        //计算相差秒数
        let leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数
        let seconds = Math.round(leave3 / 1000)

        let obj = {
          hours,
          minutes,
          seconds
        }
        for (var item in obj) {
          if (String(obj[item]).length == 1) {
            obj[item] = '0' + obj[item]
          } else {
            obj[item] = '' + obj[item]
          }
        }
        that.setData({
          countTime: obj
        })
        

      },1000)
    }
  },
  created: function () {
    let that = this
    

  },
  attached:function(){
    let that = this
    that.setData({
      countTime: that.timeInit(that.data.remainTime)
    })
    that.createCounter(that,that.data.remainTime)
    
  }
})
