import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import { NiceForm } from './nice-form.component'
import '@testing-library/jest-dom/extend-expect'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

describe('<Niceform />', () => {
  it('should be friendly', async () => {
    const mockGetMessage = jest.fn(name => {
      return Promise.resolve(`Hello ${name}!`)
    })
    const { container, debug, getByLabelText, getByText, queryByTestId } = render(<NiceForm getMessage={mockGetMessage} />)
    // const result = await axe(container.innerHTML)
    const inputName = getByLabelText(/your name/i)
    const inputButton = getByText(/talk to me/i)
    fireEvent.change(inputName, { target: { value: 'Marian' } })
    debug(inputName)
    fireEvent.click(inputButton)

    await wait(() => {
      debug()
      expect(queryByTestId('message')).toHaveTextContent(inputName.value)
    })

    // expect(mockGetMessage).toHaveBeenCalledTimes(1)

    // expect(result).toHaveNoViolations()
  })
})
