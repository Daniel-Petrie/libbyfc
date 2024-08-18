import React from 'react'
import FC from './Flashcards/FC'
import FCForm from './Flashcards/FCForm'

function CreateFC({fcList, setFcList}) {
  return (
    <div className='big-container'>
    <div className="container">
    <header className="app-header">Create Your Flashcards</header>
    <div><FCForm fcList={fcList} setFcList={setFcList}/></div>
    <img className="app-pet" src="dog.png"/>
  </div></div>
  )
}

export default CreateFC;