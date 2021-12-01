import axios from 'axios';


export const api = Object.freeze({
    async getWeather(city) {
        const data =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=da93608cf96aa48f624ad7a4a9442ed2`);

        return data;
    },
});
