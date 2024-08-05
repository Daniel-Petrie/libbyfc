import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hero() {
  const navigate = useNavigate();

  const handleCreateFlashCards = () => {
    navigate('create-flash-cards')
  }
  const handleViewFlashCards = () => {
    navigate('view-flash-cards')
  }
  return (
    <div className='big-container'>
    <div className="container">
      <header className="app-header">Libby's Flashcard Website</header>
      <div className='flex-row'>
      <button className='create-fc' onClick={handleCreateFlashCards}>Create Flashcards</button>
      <button className='view-fc' onClick={handleViewFlashCards}>View Flashcards</button>
      </div>
      <img className="app-pet" src="dog.png"/>
    </div>
    </div>
  )
}

export default Hero;