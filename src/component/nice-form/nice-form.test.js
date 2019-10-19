import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import { NiceForm } from './nice-form.component'
import '@testing-library/jest-dom/extend-expect'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'
import { getMessage as mockGetMessage } from './nice-form.api'
describe('<Niceform />', () => {

  jest.mock('./nice-form.api', () => ({
    getMessage: jest.fn(name => {
      console.log('******************************')
      Promise.resolve(`Hello ${name}!`)
    })
  }))

  it('should be friendly', async () => {

    const { container, debug, getByLabelText, getByText, queryByTestId } = render(<NiceForm />)
    const result = await axe(container.innerHTML)
    const inputName = getByLabelText(/your name/i)
    const inputButton = getByText(/talk to me/i)
    // debug()
    // fireEvent.click(inputButton)
    // fireEvent.submit(queryByTestId('form'))
    // debug()
    // await wait(() => {
    //   debug()
    //   expect(queryByTestId('message')).toHaveTextContent('Message:')
    // })

    // expect(mockGetMessage).toHaveBeenCalledTimes(1)

    expect(result).toHaveNoViolations()
  })
})
