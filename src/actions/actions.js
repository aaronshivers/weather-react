const { GEOCODE_API_KEY } = process.env
const { DARKSKY_API_KEY } = process.env

const geocodeAddress = async address => {
  try {
    const addressEncoded = (encodeURIComponent(address))
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressEncoded}&key=${GEOCODE_API_KEY}`

    const res = await fetch(url)
    const json = await res.json()
    const results = json.results[0]

    return ({
      formattedAddress: results.formatted_address,
      latitude: results.geometry.location.lat,
      longitude: results.geometry.location.lng
    })
  } catch (error) {}
}

const getWeather = async ({latitude, longitude, formattedAddress: address}) => {

  try {
    const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${latitude},${longitude}`

    const res = await fetch(url, {mode: 'cors'})
    const json = await res.json()

    return ({
      address,
      temperature:         Math.round(json.currently.temperature),
      feelsLike:           Math.round(json.currently.apparentTemperature),
      temperatureHigh:     Math.round(json.daily.data[0].temperatureHigh),
      temperatureLow:      Math.round(json.daily.data[0].temperatureLow),
      temperatureHighTime: json.daily.data[0].temperatureHighTime,
      currently:           json.currently.summary,
      today:               json.daily.data[0].summary,
      tomorrow:            json.daily.data[1].summary,
      forecast:            json.daily.summary
    })
  } catch (error) {
    console.error(error)
  }
}

export {
  geocodeAddress,
  getWeather
}
