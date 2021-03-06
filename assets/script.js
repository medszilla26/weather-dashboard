function searchWeatherAPI(city) {
  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&APPID=2839b1208e73b48cb9463ede4e8db9f1";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    var cityName = $("<h4>").text(response.name + " " + today);
    var cityTemp = $("<p>").text("Temperature: " + response.main.temp + " °F");
    var cityHum = $("<p>").text("Humidity: " + response.main.humidity + "%");
    var cityWindSpd = $("<p>").text(
      "Wind Speed: " + response.wind.speed + " MPH"
    );

    $("#city-div").empty();
    $("#city-div").append(cityName, cityTemp, cityHum, cityWindSpd);
  });
}

$("#find-city").on("click", function (event) {
  event.preventDefault();
  var inputCity = $("#city-input").val().trim();
  searchWeatherAPI(inputCity);
});

//Displays Date as mm/dd/yyyy
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();
today = "(" + mm + "/" + dd + "/" + yyyy + ")";

//Creates button for previous searched cities
var cities = [];
function renderButtons() {
  $("#history-search").empty();
  for (var i = 0; i < cities.length; i++) {
    var a = $("<button>");
    a.addClass("searchedCity");
    a.attr("data-city", cities[i]);
    a.text(cities[i]);
    $("#history-search").append(a);
  }
}
$("#find-city").on("click", function (event) {
  event.preventDefault();
  var inputCity = $("#city-input").val().trim();
  cities.push(inputCity);
  renderButtons();
});
$(document).on("click", ".searchedCity", searchWeatherAPI);
