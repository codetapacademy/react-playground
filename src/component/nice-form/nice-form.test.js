import React from 'react'
import { render } from '@testing-library/react'
import { NiceForm } from './nice-form.component'
import '@testing-library/jest-dom/extend-expect'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

describe('<Niceform />', () => {
  it('should be friendly', async () => {
    const { container, debug } = render(<NiceForm />)
    const result = await axe(container.innerHTML)

    expect(result).toHaveNoViolations()
  })
})
