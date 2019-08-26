import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const AddressForm = ({ handleGetWeather }) => {
  const [address, setAddress] = useState('')

  return (
    <Form onSubmit={e => handleGetWeather({ e, address })}>
      <Form.Group>
        <Form.Label>
          Enter Address
        </Form.Label>
        <Form.Control
          type="address"
          value={address}
          onChange={e => setAddress(e.target.value)}
          placeholder="123 Main St., Anytown, USA"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Get Weather
      </Button>
    </Form>
  )
}

export default AddressForm
