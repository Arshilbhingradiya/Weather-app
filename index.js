const weather = document.getElementById('weather');
    const cityName = document.getElementById('cityName');
    
    async function getWeather() {
        const url = `http://api.weatherapi.com/v1/current.json?key=3fd8f12f988b482890e41021240907&q=${cityName.value}&aqi=yes`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            weather.innerHTML = `
                
                <span>Temperature:</span> ${json.current.temp_c}°C (${json.current.temp_f}°F)
                <span>Humidity:</span> ${json.current.humidity}%
            `;
            console.log(json);
        } catch (error) {
            console.error(error.message);
            weather.innerHTML = `Unable to retrieve weather data. Please try again later.`;
        }
    }