import React from 'react'

const PhoneNumber = () => {
  return (
    <div>
      <label htmlFor="phone-number">Phone number</label>
      <input type="number" data-test-id="phone-number" id="phone-number" />
    </div>
  )
}

export { PhoneNumber }
