

//日期字符串转成时间戳
//例如var date = '2015-03-05 17:59:00.0' => 123128392;
function dateStrChangeTimeTamp(dateStr){
  dateStr = dateStr.substring(0,19);
  dateStr = dateStr.replace(/-/g,'/');
  var timeTamp = new Date(dateStr).getTime();
  return timeTamp
}

// 时间差转换// 时间戳转天时分秒
function timeStamp(timeStamp) {
  // var timeStamp = '' // 时间戳
  var days = parseInt(timeStamp / (1000 * 60 * 60 * 24))
  var hours = parseInt((timeStamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = parseInt((timeStamp % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = (timeStamp % (1000 * 60)) / 1000
  var time = days + ' 天 ' + hours + ' 小时 ' + minutes + ' 分钟 ' + seconds + '秒'
  return time
}

 // 将地址栏参数转换为对象
 function searchString20bj(searchString) {
  if (searchString.indexOf('?') == -1) {
    throw new Error('该地址错误');
    return false
  }
  searchString = searchString.substr(searchString.indexOf('?') + 1)
  let queryArr = searchString.split('&')
  queryObj = {}
  Array.prototype.forEach.call(queryArr, function(item, index) {
    item = item.split('=')
    queryObj[item[0]] = decodeURI(item[1])
  })
  return queryObj
}

/*
 * 将字符串转换为数组 
s 为字符串
n 为要把转换为多少个字符串转换为一个
比如0510转换为【05，10】需要写成strToArr2(‘0510’, 2)
*/
export function strToArr(s, n) {
  // var s = "051102003"
  var re = new RegExp(".{" + n +"}","g")
  var a = []
	var n
  while ((n=re.exec(s)) != null){
      a[a.length] = n[0]
  }
	let arr = []
	a.forEach(item => {
		arr.push('0x' + item)
	})
  return arr
  // for(i in a) console.log(a)
}
/* 

concat 方法连接两个或多个字符串，其语法如下：
复制代码代码如下:

str_object.concat(str1, str2, ...)

str_object 是需要连接的第一个字符串（对象），str1 是需要连接的第二个字符串，str2 是需要连接的第三个字符串，依次类推，至少需要一个str1。



<script language="JavaScript">
var str = "www";
var str1 = ".";
var str2 = "jb51";
var str3 = ".";
var str4 = "net";
document.write( str.concat(str1, str2, str3, str4) );
</script>
*/
// 自定义排序
var arr = [
  { name:"小明", age:12 },
  { name:"小红", age:11 },
  { name:"小刚", age:15 },
  { name:"小华", age:13 }
];

function compare(p) { //这是比较函数
  return function(m,n){
    var a = m[p];
    var b = n[p];
    return a - b; //升序
    }
  }
arr.sort(compare("age"));
console.log(arr);

// 微信公众号中 用户点击返回直接退出页面
function pushHistory() {
  var state = {
    title: 'title',
    url: '#'
  }
  window.history.pushState(state, 'title', '#')
}

// Element 正则验证手机号
// 验证手机号
var checkTel = (rule, value, callback) => {
  var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
  if (!myreg.test(value)) {
    callback(new Error('请输入正确的手机号'))
  } else {
    callback()
  }
}
// Element正则验证整数

 var checkInt = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('内容不能为空'))
  } else {
    console.log(value)
    if (!Number.isInteger(value)) {
      callback(new Error('请输入数字值'))
    } else {
      console.log('222')
      callback()
    }
  }
}
    
// Element正则验证固定电话
var checkFixedTel = (rule, value, callback) => {
  var myreg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/
  if (!myreg.test(value)) {
    callback(new Error('请输入正确的固定电话'))
  } else {
    callback()
  }
}


