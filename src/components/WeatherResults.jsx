import React from 'react'
import moment from 'moment'

const WeatherResults = ({
    temperature,
    feelsLike, 
    temperatureHigh,
    temperatureLow,
    temperatureHighTime,
    currently,
    today,
    tomorrow, 
    forecast
  }) => (
  <section className="">
    {
      feelsLike && <div>Currently Feels Like: {feelsLike}</div>
    }
    
    {
      temperatureHigh && <div>Today's High: {temperatureHigh}</div>
    }
    <div>Today's Low: {temperatureLow}</div>
    <div>{moment(temperatureHighTime).format('h:MM A')}</div>
    <div>Current Conditions: {currently}</div>
    <div>Today: {today}</div>
    <div>Tomorrow: {tomorrow}</div>
    <div>Forecast: {forecast}</div>
  </section>
)

export default WeatherResults
