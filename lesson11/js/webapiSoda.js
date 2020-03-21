const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=bf5e09b877b758307bcc8dd3989a14e6';
var now = new Date();
var dayOfWeek = now.getDay();

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const currentCondition = document.querySelector('#condition');
        const currentTemp = document.querySelector('#temp');
        const currentHumidity = document.querySelector('#humidity');
        const currentWindspeed = document.querySelector('#windSpeed');

        var imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.weather[0].icon + '@2x.png';
        var desc = jsObject.weather[0].description;

        currentCondition.setAttribute('src', imagesrc);
        currentCondition.setAttribute('alt', desc);

        console.log(currentCondition);
        currentTemp.textContent = Math.round(jsObject.main.temp);
        currentHumidity.textContent = (jsObject.main.humidity);
        currentWindspeed.textContent = (jsObject.wind.speed);

        windChill();
    });