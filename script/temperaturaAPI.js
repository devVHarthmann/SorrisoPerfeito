let cidade = "sapucaia";

const api = `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=e355c23ba8adfc8a397cfe9f8a9b71fb&units=metric`;

fetch(api)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        let temp = data.main.temp;
        let icon = data.weather[0].icon;
        document.getElementById("temp").innerHTML = `${temp}°C`;     
        let iconUrl= `https://openweathermap.org/img/wn/${icon}@2x.png`;
        console.log(iconUrl);
        document.getElementById("weatherIcon").src = iconUrl;
    })