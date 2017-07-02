/**
 * Created by huchunbo on 2017/7/2.
 */
$(function () {
    var clockElement = $('.clock');
    setInterval(function () {
        var currentTime = new Date();
        var times = [
            currentTime.getHours(),
            currentTime.getMinutes(),
            currentTime.getSeconds()
        ];
        for (var i=0,len=times.length; i<len; i++) {
            var item = times[i];
            if (item<10) {
                item = '0' + item;
            }
            times[i] = item.toString();
        }
        var timeNow = times.join(':');
        clockElement.text(timeNow);
    }, 1000);
});