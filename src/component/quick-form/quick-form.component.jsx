import React from 'react'

const QuickForm = () => {
  return (
    <form>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" />

      <label htmlFor="description">Description:</label>
      <textarea id="description" />

      <label htmlFor="name">Name:</label>
      <input type="text" id="name" />

      <button type="submit">Submit</button>
    </form>
  )
}

export { QuickForm }
