const appConfig = require('./config');
require('./utils/wx-pro.js');
let code;
//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    let logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function () {
    let that = this
    if (this.globalData.userInfo) {
      return this.globalData.userInfo
    } else {
      //调用登录接口
      return wx.pro.login()
        .then((res) => {
          code = res.code;
          return wx.pro.getUserInfo();
        })
        .then((res) => {
          this.globalData.userInfo = res.userInfo;
          let params = {
            url: appConfig.loginUrl,
            data: {
              code: code,
              wxUserInfo: res.userInfo,
              logintype: appConfig.logintype,
              usertype: appConfig.usertype,
              appid: appConfig.appid
            }
          }
          return wx.pro.request(params);
        })
        .then((res) => {
          if (res.returnCode == 0)
          { this.globalData.userInfo.accessToken = res.accessToken;
          this.globalData.userInfo.userID = res.userID  }
          else {
            wx.showToast({
              title: res.resultDescribe,
              duration: 2000
            })
          }
          return  this.globalData.userInfo;
        })
        .catch(err => {
          console.log(err);
          wx.showToast({
            title: err.data?err.data:err.errMsg ,
            duration: 2000
          })
           return  this.globalData.userInfo;
        })
    }
  },
  globalData: {
    userInfo: null,

  }
})


