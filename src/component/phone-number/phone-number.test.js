import React from 'react'
import { render } from 'react-dom'
import { PhoneNumber } from '.'
import { toHaveAttribute, toHaveTextContent } from '@testing-library/jest-dom'

expect.extend({ toHaveAttribute, toHaveTextContent })

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