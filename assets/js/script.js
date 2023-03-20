// Current Date
var today = dayjs().format('dddd, MMMM D');
$('#currentdate').text(today);

var apiKey = "5954458a14959ac365dff078c33aeb05";
var city;
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key};
// fetch(queryURL);

var getCity = function (city) {
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
  
    fetch(queryURL)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
          response.json().then(function (data) {
            console.log(data);
            displayRepos(data, city);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to Weather');
      });
  };


// fillFromStorage fills sidebar with anthything in localStorage
$(document).ready(function () {
    // if localStorage is not empty, call fillFromStorage()
    if (localStorage.getItem("cities")) {
         // grab data, parse and push into searchHistory[], s
         historydisplay = localStorage.getItem("cities", JSON.stringify(historydisplay));
         historydisplay = JSON.parse(historydisplay);
         // iterate through searchHistory, displaying in HTML
         for (i = 0; i <= historydisplay.length - 1; i++) {
             $("#search" + i).text(historydisplay[i]);
         }
 
         let lastIndex = (historydisplay.length - 1);
         // concat a jQuery selector & click listener that calls savedsearch()
         $("#search" + lastIndex).on("click", savedsearch);
         // .trigger() method that 'clicks' on that #searchx
         $("#search" + lastIndex).trigger("click");
     }
 });