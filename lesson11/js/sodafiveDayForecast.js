const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&cnt=40&units=imperial&appid=bf5e09b877b758307bcc8dd3989a14e6"
fetch(forecastApiURL)
  .then((response) => response.json())
  .then((forecastData) => {
    console.log(forecastData); 

    var g = 1;

    var today = new Date();
    var day = today.getDay();
    var daylist = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    console.log(day);
    
for (i=1; i<6; i++) {
    var forecastDay = day + i;
    if (forecastDay >= 7) {
        forecastDay = forecastDay - 7;
    }
    document.getElementById('day' + i).textContent = daylist[forecastDay];
}
for (i=0; i<40; i++) {
    if (forecastData.list[i].dt_txt.includes("18:00:00")) {
        var imagesrc = 'https://openweathermap.org/img/w/' + forecastData.list[i].weather[0].icon + '.png';
        var desc = forecastData.list[i].weather[0].description;
        
        document.getElementById('icon' + g).setAttribute('src', imagesrc);
        document.getElementById('icon' + g).setAttribute('alt', desc);

        document.getElementById('temp' + g).textContent = Math.round(forecastData.list[i].main.temp); 
        g=g+1;}
}

});