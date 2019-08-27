import React, { useState } from 'react'
import moment from 'moment'

const now = moment()

const Clock = () => {
  const [now, setNow] = useState(moment().format('llll'))

  setInterval(() => setNow(moment().format('llll')), 1000 * 60)

  return (
    <section className="clock">
      <div>{now}</div>
    </section>
  )
}

export default Clock
