import React from 'react'
import { render } from 'react-dom'
import { PhoneNumber } from '.'
import '@testing-library/jest-dom/extend-expect'

describe('Phone number', () => {
  it('renders the component', () => {
    const div = document.createElement('div')
    render(<PhoneNumber />, div)

    expect(div.querySelector('label').textContent).toBe('Phone number')
    expect(div.querySelector('label')).toHaveTextContent('Phone number')
    expect(div.querySelector('input').type).toBe('number')
    expect(div.querySelector('input')).toHaveAttribute('type', 'number')
  })
})