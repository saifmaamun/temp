
const API_KEY = `ea5c6ecb4414997d85681ec7d5e827ed`;


const searchTemperature = () => {
    const cityName = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;


    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data));
}

const display = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayData = data => {
    const imgUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    const img = document.getElementById('weather-icon')
    img.setAttribute('src', imgUrl)
    display('city', data.name)
    display('temperature', data.main.temp)
    display('condition', data.weather[0].main)
}

