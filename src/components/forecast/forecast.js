import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    console.log(data);

    const dayInAWeek = new Date().getDay();

    const forecastDays = weekDays.slice(dayInAWeek, weekDays.length).concat(weekDays.slice(0, dayInAWeek));

    return (
        <div style={{ backgroundColor: "#474F44", color: "#F3F7E8" }} className='rounded-md shadow-xl py-10'>
            <Accordion className='flex flex-col px-5 md:px-20 gap-5' allowZeroExpanded>
                <p className='text-xl lg:text-3xl font-bold'>Weekly Forecast</p>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton className='flex flex-col md:grid md:grid-cols-2 justify-between w-full bg-niceWhite-100 p-5 rounded-md text-niceBlack-100 shadow-lg'>
                                <div className='flex gap-5'>
                                    <img alt='weather' className='w-3/12' src={require(`../../img/icons/${item.weather[0].icon}.png`)}></img>
                                    <p className='my-auto font-bold'>{forecastDays[idx]}</p>
                                </div>
                                <div className='flex gap-5 justify-start md:justify-end my-auto'>
                                    <p className='capitalize grow'>{item.weather[0].description}</p>
                                    <p className='grow-0 font-light'>{Math.round(item.main.temp_min)}/{Math.round(item.main.temp_min)}°C</p>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='p-5'>
                                <div className='flex flex-wrap gap-5 justify-center'>
                                    <p>Feels like {Math.round(item.main.feels_like)}°C</p>
                                    <p>Wind: {item.wind.speed}m/s</p>
                                    <p>Humidity: {item.main.humidity}%</p>
                                    <p>Pressure: {item.main.pressure}hPa</p>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default Forecast