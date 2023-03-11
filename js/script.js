const addButton = document.querySelector('.adding');
const container = document.querySelector('#weather-container');

const destroyCard = (event) => {
    event.target.closest('div.weather-card').remove()
}

addButton.addEventListener('click', event => {
    const newWeatherCard = document.createElement('div');
    newWeatherCard.classList.add('weather-card');

    const newHeaderWeatherCard = document.createElement('div');
    newHeaderWeatherCard.classList.add('headerWeatherCard');

    const logoClose = document.createElement('span');
    logoClose.classList.add('material-icons');
    logoClose.classList.add('closeButton');
    logoClose.addEventListener('click', destroyCard)
    logoClose.innerText = 'close';

    newHeaderWeatherCard.appendChild(logoClose);
    newWeatherCard.appendChild(newHeaderWeatherCard);

    const newBodyWeatherCard = document.createElement('div');
    newBodyWeatherCard.classList.add('bodyWeatherCard');

    newWeatherCard.appendChild(newBodyWeatherCard);

    container.insertBefore(newWeatherCard, addButton);
});
