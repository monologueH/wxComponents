# 小程序时钟组件 

## **如何引用**
1. 在xx.json中加入如下代码（xx为要加入组件的页面）:
```json
{
  "usingComponents": {
    "clock": "/components/clock/clock"
  }
}
```
2. 在xx.js中加入`<clock></clock>`标签（示例见test.wxml中的引用）
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
    // 高度
    lineHeight: {
      type: null,
      value: 56
    },
    // 宽度
    width: {
      type: null,
      value: 240
    }
## **支持的属性**
属性名|类型|示例|解释
---|---|---|---
backgroundColor|String|背景颜色|只支持"white"和"black"
remainTime|String|剩余时间|倒计时的起始时间，为时间戳
title|String|倒计时左边文案|文字
lineHeight|String|高度|不需要单位
width|String|宽度|不需要单位
