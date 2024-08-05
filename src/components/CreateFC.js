import React from 'react'
import FC from './Flashcards/FC'
import FCForm from './Flashcards/FCForm'

function CreateFC({fcs}) {
  return (
    <div className='big-container'>
    <div className="container">
    <header className="app-header">Create Your Flashcards</header>
    <div><FCForm flashcards={fcs}/></div>
    <img className="app-pet" src="dog.png"/>
  </div></div>
  )
}

export default CreateFC;