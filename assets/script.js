$("#find-city").on("click", function (event) {
  event.preventDefault();

  var city = $("#city-input").val();
  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?" +
    city +
    "&APPID=2839b1208e73b48cb9463ede4e8db9f1";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    $("#city-view").text(JSON.stringify(response));
  });
});
