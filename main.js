console.log("this is a test")

const addButton = document.querySelector('.adding')
const container = document.querySelector('#weather-container')

addButton.addEventListener('click', event => {
    const newWeatherCard = document.createElement("div");
    newWeatherCard.classList.add('weather-card');
    container.insertBefore(newWeatherCard, addButton);
});