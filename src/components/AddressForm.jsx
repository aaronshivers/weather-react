import React, { useState } from 'react'
// import { Form, Button } from 'react-bootstrap'

const AddressForm = ({ handleGetWeather }) => {
  const [address, setAddress] = useState('')

  return (
    <form className="form" onSubmit={e => handleGetWeather({ e, address })}>
      <label className="form__label">
        Enter Address
        <input
          className="form__input"
          type="address"
          value={address}
          onChange={e => setAddress(e.target.value)}
          placeholder="123 Main St., Anytown, USA"
        />
      </label>
      <button className="form__btn">
        Get Weather
      </button>
    </form>
  )
}

export default AddressForm
