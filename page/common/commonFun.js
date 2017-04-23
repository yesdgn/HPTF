const appConfig = require('../../config');
require('../../utils/wx-pro.js');
const util = require('../../utils/util');

function uploadFile(formData) {
    return wx.pro.chooseImage({
        count: 3, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    })
        .then((res) => {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            let tempFilePaths = res.tempFilePaths;
            console.log(tempFilePaths);
            return tempFilePaths;
        })
        .then((res) => {
            res.map((file) => {
                let param = {
                    url: appConfig.uploadUrl,
                    filePath: file,
                    name: 'file',
                    formData: formData
                }
                wx.pro.uploadFile(param)
            })

        })
        .then((res) => {
            console.log(res);
        })
}

module.exports = {
    uploadFile: uploadFile

}
