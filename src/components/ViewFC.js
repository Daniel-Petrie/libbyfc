import React from 'react'
import FCList from './Flashcards/FCList'


function ViewFC({fcs}) {
  return (
    <div className='big-container'>
    <div className="container">
    <header className="app-header">Choose Your Flashcards</header>
    <div><FCList flashcards={fcs}/></div>
    <img className="app-pet" src="dog.png"/>
  </div>
  </div>
  )
}

export default ViewFC;