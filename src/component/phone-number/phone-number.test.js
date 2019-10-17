import React from 'react'
import { render } from 'react-dom'
import { PhoneNumber } from '.'
import { queries } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

describe('Phone number', () => {
  it('renders the component', () => {
    const div = document.createElement('div')
    render(<PhoneNumber />, div)

    const input = queries.getByLabelText(div, 'Phone number')

    expect(div.querySelector('label').textContent).toBe('Phone number')
    expect(div.querySelector('label')).toHaveTextContent('Phone number')
    expect(input.type).toBe('number')
    expect(input).toHaveAttribute('type', 'number')
  })
})