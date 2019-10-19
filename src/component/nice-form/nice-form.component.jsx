import React, { useRef, useState } from 'react'
import { getMessage } from './nice-form.api'

const NiceForm = () => {
  const [message, updateMessage] = useState('')
  const myRef = useRef()

  const handleSubmit = async (se) => {
    se.preventDefault()
    const response = await getMessage(myRef.current.value)
    updateMessage(response)
  }

  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <h1>Nice form</h1>
      <label htmlFor="your-name">Your name</label>
      <input id="your-name" type="text" placeholder="Your name" ref={myRef} />
      <button type="submit">Talk to me</button>
      <div data-testid="message">Message: {message}</div>
    </form>
  )
}

export { NiceForm }
