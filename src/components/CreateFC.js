import React, { useState } from 'react';
import FCForm from './Flashcards/FCForm';

function CreateFC({ flashcardLists, createNewList, addToFlashcardList }) {
  const [selectedList, setSelectedList] = useState('');
  const [newListName, setNewListName] = useState('');

  const handleCreateList = () => {
    if (newListName) {
      createNewList(newListName);
      setSelectedList(newListName);
      setNewListName('');
    }
  };

  return (
    <div className='create-fc-container'>
      <header className='app-header'>Create Your Flashcards</header>

      {!selectedList ? (
        <div className='list-creation'>
          <input
            type='text'
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            placeholder='Enter List Title'
            className='list-input'
          />
          <button onClick={handleCreateList} className='create-list-btn'>
            Create List
          </button>
        </div>
      ) : (
        <div className='flashcard-section'>
          <h2 className='flashcard-section-title'>Adding flashcards to: {selectedList}</h2>
          <FCForm
            addToFlashcardList={(flashcard) => addToFlashcardList(selectedList, flashcard)}
            flashcards={flashcardLists[selectedList] || []}
          />
        </div>
      )}
    </div>
  );
}

export default CreateFC;
