
var d = new Date();
var hour = d.getHours();
var day = d.getDay();


const workTime = function (request, response, next) {
if (hour > 9 && hour < 17 && day > 0 && day < 6) {
next();
}else{
    response.send('Sorry it is not working day')
  }
}

     module.exports=workTime;