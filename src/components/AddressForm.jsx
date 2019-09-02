import React, { useState } from 'react'
// import { Form, Button } from 'react-bootstrap'

const AddressForm = ({ handleGetWeather }) => {
  const [address, setAddress] = useState('')

  return (
    <section className="centered">
      <form className="form" onSubmit={e => handleGetWeather({ e, address })}>
        <div className="input-group">
          <input
            className="form__input input-group__item"
            type="address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            placeholder="enter address..."
            spellCheck="false"
          />
          <button type="submit" className="form__btn input-group__item">
            get weather
          </button>
        </div>
      </form>
    </section>
  )
}

export default AddressForm
