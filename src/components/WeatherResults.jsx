import React from 'react'
import moment from 'moment'

const WeatherResults = ({
    address,
    temperature,
    feelsLike, 
    temperatureHigh,
    temperatureLow,
    temperatureHighTime,
    currently,
    today,
    tomorrow, 
    forecast
  }) => {
  console.log(temperatureHighTime)
  return (
    <div>
      <div>{address}</div>
      <h1 className="display-2">
        {temperature}{temperature && <span>&#176;</span>}
      </h1>
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
    </div>
  )
  }
export default WeatherResults
