import React from 'react'
import FC from './FC';


function FCList({fcList}) {
  console.log(fcList)
  return (
    <div>{fcList.map(flashcard => {
      return <FC key={flashcard.id} fc={flashcard}/>
    })}</div>
  )
}

export default FCList;