import React from 'react'
import { render } from 'react-dom'
import { PhoneNumber } from '.'
import { getQueriesForElement } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

describe('Phone number', () => {
  it('renders the component', () => {
    const div = document.createElement('div')
    render(<PhoneNumber />, div)
    const { getByLabelText } = getQueriesForElement(div)

    const input = getByLabelText(div, /Phone number/i)

    expect(input.type).toBe('number')
    expect(input).toHaveAttribute('type', 'number')
  })
})