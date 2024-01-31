// GeoDB API
export const geo_api_url = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const geo_api_options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_GEO_DB_API_KEY,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

// OpenWeather API
export const weather_api_url = 'https://api.openweathermap.org/data/2.5';
export const weather_api_key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;