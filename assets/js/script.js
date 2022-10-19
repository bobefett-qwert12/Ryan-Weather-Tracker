const apiKey = "b926f2eadf16d646b404c4309d865c6f";
var weatherStats;
var nameInputEl = document.getElementById("nameInput");
var searchButtonEl = document.getElementById("search");

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      var json = response.json();
      console.log(json);
      return json;
  });
}

function getRequestUrl(cityUrl){
  var cityStats = getApi(cityUrl);
  var lat;
  var lon;
  for(let i in cityStats){
    if(Array.isArray(i)){
      lat = i[0].lat;
      lon = i[0].lon;
    }
  }
  var requestUrl = ('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey);
  weatherStats = getApi(requestUrl);
  //console.log(weatherStats);
  //var temperature = weatherStats.temp;
  //var wind = weatherStats.speed;
  //var humidity = weatherStats.wind;
  //var date = weatherStats.dt_text;
  //var icon = weatherStats.icon;
}

function getCityUrl(){
  //var cityName = nameInputEl.innerHTML;
  var cityName = "provo";
  var cityUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=" + apiKey;
  getRequestUrl(cityUrl);
  for(var i = 0; i < 20; i++){
    if(localStorage.getItem(i) != null && localStorage.getItem(i) != ""){
      localStorage.setItem(i, cityName);
      return null;
    }
  }
}

searchButtonEl.addEventListener("click", getCityUrl);