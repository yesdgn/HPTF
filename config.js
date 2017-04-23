/**
 * 小程序配置文件
 */
//var host = "https://hptf.s1.natapp.cc"
var host = "http://192.168.31.88:7001"

var config = {
    host,
    apiUrl: `${host}/api/`,
    loginUrl:`${host}/wxLogin`,
    uploadUrl:`${host}/upload`,
    logintype: 5,
    usertype: 1,
    appid: '1008'
};

module.exports = config
