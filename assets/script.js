function searchWeatherAPI(city) {
  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&APPID=2839b1208e73b48cb9463ede4e8db9f1";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    var cityName = $("<h3>").text(response.name);
    $("#city-div").empty();
    $("#city-div").append(cityName);
  });
}

$("#find-city").on("click", function (event) {
  event.preventDefault();
  var inputCity = $("#city-input").val().trim();
  searchWeatherAPI(inputCity);
});
