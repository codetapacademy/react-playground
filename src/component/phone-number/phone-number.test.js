import React from 'react'
import { PhoneNumber } from '.'
import '@testing-library/jest-dom/extend-expect'
// The module `@testing-library/react/cleanup-after-each` has been deprecated and no longer does anything (it is not needed). You no longer need to import this module and can safely remove any import or configuration which imports this module
// import '@testing-library/react/cleanup-after-each'
import { render, fireEvent } from '@testing-library/react'
import { isValidUKPhoneNumber } from './phone-number.util'

describe('Phone number', () => {
  it('renders the component', () => {
    const { getByLabelText } = render(<PhoneNumber />)
    const input = getByLabelText(/Phone number/i)
    
    expect(input.type).toBe('number')
    expect(input).toHaveAttribute('type', 'number')
  })

  it('validates simple UK phone number', () => {
    const phoneNumberValid = '07738123456'
    const phoneNumberInvalid = '07738123456111'
    const receivedValid = isValidUKPhoneNumber(phoneNumberValid)
    const receivedInvalid = isValidUKPhoneNumber(phoneNumberInvalid)
    expect(receivedValid).toBe(true)
    expect(receivedInvalid).toBe(false)
  })

  it('should show an error message if number is invalid', () => {
    const { getByLabelText, getByTestId, container, debug, getByText } = render(<PhoneNumber />)
    const input = getByLabelText(/phone number/i)
    const phoneNumberInvalid = '07738123456123'
    fireEvent.change(input, { target: { value: phoneNumberInvalid } });
    const messageElement = getByTestId('phone-number-error')

    expect(messageElement).toHaveTextContent('The number is not a UK valid phone number.')
    expect(container).toHaveTextContent('The number is not a UK valid phone number.')
    expect(getByText(/The number is not a UK valid phone number./)).toBeTruthy()
    expect(getByText(/The number is not a UK valid phone number./)).toBeInTheDocument()
  })

  it('should not show an error message if number is invalid', () => {
    const { getByLabelText, queryByTestId } = render(<PhoneNumber />)
    const input = getByLabelText(/phone number/i)
    const phoneNumberInvalid = '07738123456'
    fireEvent.change(input, { target: { value: phoneNumberInvalid } });
    const messageElement = queryByTestId('phone-number-error')

    expect(messageElement).toBeNull()
  })
})
