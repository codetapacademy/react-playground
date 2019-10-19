import React, { useState } from 'react'
import { isValidUKPhoneNumber } from './phone-number.util'

const PhoneNumber = ({ number = '' }) => {
  const [phoneNumber, updatePhoneNumber] = useState(number)
  const handleOnChange = se => {
    const { value } = se.target
    updatePhoneNumber(value)
  }

  const isValid = isValidUKPhoneNumber(phoneNumber)

  return (
    <div>
      <label
        htmlFor="phone-number">
        phone number
      </label>

      <input
        type="number"
        data-test-id="phone-number"
        id="phone-number"
        value={phoneNumber}
        onChange={handleOnChange}
      />

      {!isValid && <div data-testid="phone-number-error">The number is not a UK valid phone number.</div>}
    </div>
  )
}

export { PhoneNumber }
