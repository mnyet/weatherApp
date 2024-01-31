import { Helmet } from 'react-helmet';
import './App.css';
import Search from './components/search/search.js';
import { useState } from 'react';
import CurrentWeather from './components/current-weather/current-weather.js';
import { weather_api_key, weather_api_url } from './api.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Forecast from './components/forecast/forecast.js';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);

    const [latitude, longitude] = searchData.value.split(" ");
    console.log("Lat: " + latitude + " Long: " + longitude);

    const weatherFetch = fetch(`${weather_api_url}/weather?lat=${latitude}&lon=${longitude}&appid=${weather_api_key}&units=metric`);
    const forecastFetch = fetch(`${weather_api_url}/forecast?lat=${latitude}&lon=${longitude}&appid=${weather_api_key}&units=metric`);

    Promise.all([weatherFetch, forecastFetch])
      .then(async (res) => {
        const weatherRes = await res[0].json();
        const forecastRes = await res[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherRes });
        setForecast({ city: searchData.label, ...forecastRes });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="App bg-niceGray-100 h-dvh overflow-auto py-10 flex justify-center"> {/* body page */}
      <div className='w-11/12 md:w-8/12 h-fit bg-niceGreen-100 shadow-lg m-auto rounded-md'> {/* container */}
        <div className='m-10'>
          {!currentWeather &&
            <div className='flex justify-center py-5 text-center'>
              <p className='font-bold text-2xl lg:text-3xl text-niceGray-200'>Weather Application by Bear</p>
            </div>
          }
          <Search onSearchChange={handleOnSearchChange} className='shadow-2xl' />
          {currentWeather &&
            <div>
              <br></br>
              <CurrentWeather data={currentWeather} />
              <br></br>
              <Forecast data={forecast} />
            </div>
          }
          {forecast &&
            <div>
            </div>
          }
          <br></br>
          <a href='https://github.com/mnyet/weatherApp' target='_blank' rel='noreferrer' className='flex mx-auto gap-2 w-fit'>
            <FontAwesomeIcon className='text-xl my-auto' icon={faGithub} />
            <p className='font-semibold'>Source Code</p>
          </a>
          <p className='text-center font-light'>mnyessss 2024</p>
        </div>
      </div>
    </div>
  );
}

export default App;
