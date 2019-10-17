import React from 'react'
import { render } from 'react-dom'
import { PhoneNumber } from '.'
import { getQueriesForElement } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

const renderUserInterface = component => {
  const box = document.createElement('div')
  render(component, box)
  const queries = getQueriesForElement(box)
  return {
    box,
    ...queries,
  }
}

describe('Phone number', () => {
  it('renders the component', () => {
    const { getByLabelText } = renderUserInterface(<PhoneNumber />)
    const input = getByLabelText(/Phone number/i)

    expect(input.type).toBe('number')
    expect(input).toHaveAttribute('type', 'number')
  })
})