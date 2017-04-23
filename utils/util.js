function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getRandom(randlen) {
  let n = new Date().getTime().toString() + generateMixedNum(randlen);
  return n;
}
function generateMixedNum(randlen) {
  const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let res = "";
  for (let i = 0; i < randlen; i++) {
    let id = Math.ceil(Math.random() * 9);
    res += chars[id];
  }
  return res;
}

module.exports = {
  formatTime: formatTime,
  getRandom:getRandom
  
}
