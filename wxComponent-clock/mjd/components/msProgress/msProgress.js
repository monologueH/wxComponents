// components/msProgress/msProgress.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 背景颜色
    backgroundColor: {
      type: String,
      value: 'white'
    },
    // percent
    percent: {
      type: String,
      value: "20"
    },
    // 倒计时前文案
    contentBgcA: {
      type: String,
      value: 'red'
    },
    // 倒计时前文案
    contentBgcB: {
      type: String,
      value: 'green'
    },
    // 弹窗取消按钮文字
    height: {
      type: null,
      value: 20
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

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
