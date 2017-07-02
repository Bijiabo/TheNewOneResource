/**
 * Created by huchunbo on 2017/7/2.
 */
setInterval(function () {
    window.currentTime = new Date();
    document.getElementById('clock').textContent = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()} `;
}, 1000);