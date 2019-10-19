import React from 'react'
import { render } from '@testing-library/react'
import { QuickForm } from '.'

describe('<QuickForm />', () => {
  it('renders the form', () => {
    const { getByLabelText, getByText } = render(<QuickForm />)
    const titleInput = getByLabelText(/title/i)
    const descriptionInput = getByLabelText(/description/i)
    const NameInput = getByLabelText(/name/i)
    const submitButton = getByText(/submit/i)
  })
})
