var apiKey = "";
var weatherStats;
var nameInputEl = document.getElementsByClassName("nameInput");
var searchButtonEl = document.getElementsByClassName("search");

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        responseText.textContent = response.status;
      }
      return response.json();
  });
}

function getRequestUrl(cityUrl){
  var cityStats = getApi(cityUrl);
  var lat = cityStats.lat;
  var lon = cityStats.lon;
  var requestUrl = ('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey);
  weatherStats = getApi(requestUrl);
  console.log(weatherStats);
  //var temperature = weatherStats.temp;
  //var wind = weatherStats.speed;
  //var humidity = weatherStats.wind;
  //var date = weatherStats.dt_text;
  //var icon = weatherStats.icon;
}

function getCityUrl(){
  var cityName = nameInputEl.innerHTML;
  var cityUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=5&appid=" + apiKey;
  getRequestUrl(cityUrl);
}

searchButtonEl.addEventListener("click", getCityUrl());