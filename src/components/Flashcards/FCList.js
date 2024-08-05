import React from 'react'
import FC from './FC';


function FCList({flashcards}) {
  return (
    <div>{flashcards.map(flashcard => {
      return <FC key={flashcard.id} fc={flashcard}/>
    })}</div>
  )
}

export default FCList;