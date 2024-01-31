import React from 'react'

const CurrentWeather = ({ data }) => {
    console.log(data);

    return (
        <div style={{ backgroundColor: "#474F44", color: "#F3F7E8" }} className='rounded-md shadow-xl py-10'>
            <div className='topPart flex flex-col text-center justify-center lg:justify-between lg:text-left lg:flex-row lg:px-20'>
                <div className='my-auto flex flex-col gap-1'>
                    <div>
                        <p className='font-bold text-4xl'>{data.city}</p>
                        <p className='text-xl capitalize'>{data.weather[0].description}</p>
                    </div>
                    <br></br>
                    <div>
                        <p className='font-bold text-3xl'>{Math.round(data.main.temp)}°C</p>
                        <p className=''>Feels like {Math.round(data.main.feels_like)}°C</p>
                        <p className=''>Wind: {data.wind.speed}m/s</p>
                        <p className=''>Humidity: {data.main.humidity}%</p>
                        <p className=''>Pressure: {data.main.pressure}hPa</p>
                    </div>
                </div>
                <img className='w-2/5 object-contain sm:w-4/12 lg:h-auto m-auto lg:m-0' src={require(`../../img/icons/${data.weather[0].icon}.png`)} alt='weather-icon' />
            </div>
            <div className='bottomPart'></div>
        </div>
    );
};

export default CurrentWeather;