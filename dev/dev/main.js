/**
 * Created by huchunbo on 2017/7/2.
 */
setInterval(function () {
    window.currentTime = new Date();
    document.getElementById('clock').textContent = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()} `;
    
    // BridgeAPI.sendDataToReactNative(currentTime);
    // getWeatherData();
}, 1000);

var getWeatherData = function () {
    BridgeAPI.sendDataToReactNative({
        action: 'weather.now'
    });
};

var cache = {};

$(window).on('BridgeAPIReady', function () {
    $('.log').append('BridgeAPIReady\n');
    
    getWeatherData();
    
    BridgeAPI.addChangeWatcher(function (data) {
        console.log(data);
        switch (data.action) {
            case 'weather.now':
                if (JSON.stringify(cache.weatherNow) != JSON.stringify(data.data)) {
                    $('.log').append(JSON.stringify(data) + '\n');
                    cache.weatherNow = data.data;
                }
                
                break;
            default:
                break;
        }
        // $('.log').append(JSON.stringify(data) + '\n');
    });
});