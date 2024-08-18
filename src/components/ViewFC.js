import React from 'react';

function ViewFC({ flashcardLists }) {
  return (
    <div className='view-fc-container'>
      <header className='app-header'>View Your Flashcards</header>

      {Object.keys(flashcardLists).length === 0 ? (
        <p>No flashcard lists available. Create a new list to start adding flashcards.</p>
      ) : (
        <div className='flashcard-lists'>
          {Object.keys(flashcardLists).map(listName => (
            <div key={listName} className='flashcard-list-container'>
              <h2 className='flashcard-list-title'>{listName}</h2>
              <ul className='flashcard-list'>
                {flashcardLists[listName].map((flashcard, index) => (
                  <li key={index} className='flashcard-item'>
                    <p>{flashcard.message}</p>
                    <button className='delete-btn' onClick={() => {/* Add delete functionality here */}}>
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewFC;
