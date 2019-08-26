import React from 'react'

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
  }) => (
  <div>
    <div>{address}</div>
    <div>{temperature}</div>
    <div>{feelsLike}</div>
    <div>{temperatureHigh}</div>
    <div>{temperatureLow}</div>
    <div>{temperatureHighTime}</div>
    <div>{currently}</div>
    <div>{today}</div>
    <div>{tomorrow}</div>
    <div>{forecast}</div>
  </div>
)

export default WeatherResults
