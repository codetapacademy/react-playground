import React, { useRef, useState } from 'react'

const NiceForm = ({ getMessage }) => {
  const [name, updateName] = useState('')
  const [message, updateMessage] = useState('')
  const myRef = useRef()

  const handleSubmit = async (se) => {
    se.preventDefault()
    const response = await getMessage(myRef.current.value)
    updateMessage(response)
  }

  const handleNameChange = se => updateName(se.target.value)

  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <h1>Nice form</h1>
      <label htmlFor="your-name">Your name</label>
      <input
        id="your-name"
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Your name"
        ref={myRef}
      />
      <button type="submit">Talk to me</button>
      <div data-testid="message">{message}</div>
    </form>
  )
}

export { NiceForm }
