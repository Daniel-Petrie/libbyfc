import React, {useState} from 'react'

function FCForm() {

  const [FC, setFC] = useState({
    message: ""
  })


  const handleChange = e => {
    setFC({message: e.target.value})
  }
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="flashcard" value={FC.message} placeholder='Enter Your Question Here' onChange={handleChange}/>
      <button type="submit">Add Flashcard</button>
    </form>
  )
}

export default FCForm;