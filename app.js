window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let LocationTimezone = document.querySelector('.Location-Timezone');

    if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(position => {
    long = position.coords.longitude;
    lat = position.coords.latitude;

const proxy = "https //cors-anywhere.herokuapp.com/";
const api = `https://www.weatherapi.com/my/fc1e39c17bb341e6894231306221003/${lat},${long}`;

fetch(api)
    .then(response =>{
        return response.json();
    })
    .then(data =>{
        console.log(data);
        const {temperature, summary } = data.currently;
//Set DOM Elements from the API
temperatureDegree.textContent = temperature;
temperatureDescription.textContent = summary;
    })
});

}
});