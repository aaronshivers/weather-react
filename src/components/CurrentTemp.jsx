import React from 'react'

const CurrentTemp = ({currentTemp}) => (
  <>
  {
    currentTemp &&
    <h1 className="current-temp">
      {currentTemp}<span>&#176;</span>
    </h1>
  }
  </>
)
export default CurrentTemp
