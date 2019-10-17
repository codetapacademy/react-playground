import React from 'react'
import { PhoneNumber } from '.'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'

describe('Phone number', () => {
  it('renders the component', () => {
    const { getByLabelText } = render(<PhoneNumber />)
    const input = getByLabelText(/Phone number/i)
    
    expect(input.type).toBe('number')
    expect(input).toHaveAttribute('type', 'number')
    cleanup()
  })
})