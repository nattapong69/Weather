$(function () {
    $("#getWeather").click(function (e) {
        e.preventDefault();
        $("#forecastbox").empty();
        var city = $("#city").val();
        var d = new Date();
        var date = d.toDateString();       
        var urlApi = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ca44bdc8f531754566a509754e2b141c";
        $.get(urlApi, function (data) {
            var weatherC = data.weather[0].main;
            if (weatherC == "Clouds") {
                var weatherS = "Cloudy.png";
            }
            if (weatherC == "Rain") {
                var weatherS = "Rain.png";
            }
            if (weatherC == "Clear") {
                var weatherS = "clear.png";
            }
            if (weatherC == "Thunderstorm") {
                var weatherS = "Thunderstorm.png";
            }
            if (weatherC == "Mist") {
                var weatherS = "mist.png";
            }
            console.log(data);
            var row1 = "<h4 class = 'fontH'><img id = 'pic' src='location.png' alt=''><b>" + city + "</td><td><h4><img id = 'pic' src='date.png' alt=''><b>" + date + "</h4></td></tr></table>"+
            "<table align = 'center'><tr><td><img class = 'font' src='" + weatherS + 
            "' alt=''></td></tr></table><table align = 'center'><tr><td width = '100%'><p id = 'text'><b>" + data.weather[0].description + 
            "<b></p></td></tr></table>" + "<table>" + "<tr><td><img src='Celsius.png' alt=''></td><td>" + ((data.main.temp) / 10).toFixed(2) + 
            " °C</td></tr>" + "<tr><td><img src='Pressure.png' alt=''></td><td>" + data.main.pressure + 
            " hPa</td></tr>" + "<tr><td><img src='humidity.png' alt=''></td><td>" + data.main.humidity + "%";
            $("#forecastbox").append(row1);
        });
    });
});