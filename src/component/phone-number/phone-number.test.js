import React from 'react'
import { render } from 'react-dom'
import { PhoneNumber } from '.'

describe('Phone number', () => {
  it('renders the component', () => {
    const div = document.createElement('div')
    render(<PhoneNumber />, div)

    expect(div.querySelector('label').textContent).toBe('Phone number')
    expect(div.querySelector('input').type).toBe('number')
  })
})