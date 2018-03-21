function addByTransDate(dateParameter, num) {
    var translateDate = "", dateString = "", monthString = "", dayString = "";
    translateDate = dateParameter.replace("-", "/").replace("-", "/"); 
    var newDate = new Date(translateDate);
    newDate = newDate.valueOf();
    newDate = newDate + num * 24 * 60 * 60 * 1000;
    newDate = new Date(newDate);
    //如果月份长度少于2，则前加 0 补位   
    if ((newDate.getMonth() + 1).toString().length == 1) {
monthString = 0 + "" + (newDate.getMonth() + 1).toString();
    } else {
monthString = (newDate.getMonth() + 1).toString();
    }
    //如果天数长度少于2，则前加 0 补位   
    if (newDate.getDate().toString().length == 1) {
dayString = 0 + "" + newDate.getDate().toString();
    } else {
dayString = newDate.getDate().toString();
    }
    dateString = newDate.getFullYear() + "-" + monthString + "-" + dayString;
    return dateString;
}
 
function reduceByTransDate(dateParameter, num) {
    var translateDate = "", dateString = "", monthString = "", dayString = "";
    translateDate = dateParameter.replace("-", "/").replace("-", "/"); 
    var newDate = new Date(translateDate);
    newDate = newDate.valueOf();
    newDate = newDate - num * 24 * 60 * 60 * 1000;
    newDate = new Date(newDate);
    //如果月份长度少于2，则前加 0 补位   
    if ((newDate.getMonth() + 1).toString().length == 1) {
monthString = 0 + "" + (newDate.getMonth() + 1).toString();
    } else {
monthString = (newDate.getMonth() + 1).toString();
    }
    //如果天数长度少于2，则前加 0 补位   
    if (newDate.getDate().toString().length == 1) {
dayString = 0 + "" + newDate.getDate().toString();
    } else {
dayString = newDate.getDate().toString();
    }
    dateString = newDate.getFullYear() + "-" + monthString + "-" + dayString;
    return dateString;
} 
 
//得到日期  主方法
function showTime(pdVal) {
    var trans_day = "";
    var cur_date = new Date();
    var cur_year = new Date().getFullYear();
    var cur_month = cur_date.getMonth() + 1;
    var real_date = cur_date.getDate();
    cur_month = cur_month > 9 ? cur_month : ("0" + cur_month);
    real_date = real_date > 9 ? real_date : ("0" + real_date);
    eT = cur_year + "-" + cur_month + "-" + real_date;
    if (pdVal == 1) {
trans_day = addByTransDate(eT, 1);
    }
    else if (pdVal == -1) {
trans_day = reduceByTransDate(eT, 1);
    }
    else {
trans_day = eT;
    }
   //处理
    return trans_day;
}
