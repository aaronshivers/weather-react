import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { Container } from 'react-bootstrap'
import AddressForm from './AddressForm'
import WeatherResults from './WeatherResults'
import {  geocodeAddress, getWeather } from '../actions/actions'


const App = () => {
  const [weather, setWeather] = useState({})

  const handleGetWeather = async ({ e, address }) => {
    e.preventDefault()
    const {
      formattedAddress,
      latitude,
      longitude
    } = await geocodeAddress(address)
    const weather = await getWeather({ formattedAddress, latitude, longitude })
    setWeather(weather)
  }

  return (
    <main className="container">
      <h1 className="display-4 text-center">hello</h1>
      {
        Object.keys(weather).length === 0 && <AddressForm handleGetWeather={handleGetWeather} />
      }
      <WeatherResults {...weather} />
    </main>
  )
}

export default hot(App)
