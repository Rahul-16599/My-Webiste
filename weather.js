
const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityLat= document.getElementById("city-lat");
const cityLon= document.getElementById("city-lon");
const cityHumidity= document.getElementById("city-humidity");
const cityTemp = document.getElementById("city-temp");
const TimeBox = document.getElementById("time-box");
const stopTime = document.getElementById("stop");

async function getData (cityName) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=17c3d2eaa5a94d12ae1180332241012&q=${cityName}&aqi=yes`);
    console.log(promise.json);   
    return await promise.json();
    
};

  function showTime() {
    const currentTime = new Date();
    const time = `${currentTime.getHours()} : ${currentTime.getMinutes()}: ${currentTime.getSeconds()}`;
   const display = document.getElementById("fourth");
   display.innerText = time;
  }
  

  let interval = setInterval (showTime, 1000);
  stopTime.addEventListener("click", () => {
     clearInterval(interval);
  })



  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    document.getElementById("search-button").click();


    }
  });


  button.addEventListener("click", async () => {
    const value = input.value
    const result = await getData(value);
    console.log(result);

  cityName.innerText = `${result.location.name},  ${result.location.region},  ${result.location.country}`;
  cityLat.innerText = `Latitude :- ${result.location.lat}`;
  cityLon.innerText = `Longitude :- ${result.location.lon}`;
  cityTime.innerText =  `Date & Time :- ${result.location.localtime}`;
  cityTemp.innerText =  `temperature :- ${result.current.temp_c} C`;
  cityHumidity.innerText = `Humidity :- ${result.current.humidity}`;
});