/**
 * Created by huchunbo on 2017/7/2.
 */
setInterval(function () {
    window.currentTime = new Date();
    document.getElementById('clock').textContent = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()} `;
    
    BridgeAPI.sendDataToReactNative(currentTime);
}, 1000);

// window.addEventListener('BridgeAPIReady', function () {
//     $('.log').append('BridgeAPIReady\n');
// });

$(window).on('BridgeAPIReady', function () {
    $('.log').append('BridgeAPIReady\n');
    
    BridgeAPI.addChangeWatcher(function (data) {
        console.log(data);
        $('.log').append(JSON.stringify(data) + '\n');
    });
});