import React, { useState } from 'react';

function FCForm({ addToFlashcardList, flashcards }) {
  const [FC, setFC] = useState({ message: "", answer: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFC({ ...FC, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (FC.message && FC.answer) {
      addToFlashcardList(FC);
      setFC({ message: "", answer: "" }); // Clear the form after submission
    }
  };

  return (
    <div className='fc-form-container'>
      <form onSubmit={handleSubmit} className='fc-form'>
        <input
          type="text"
          name="message"
          value={FC.message}
          onChange={handleChange}
          placeholder="Enter your question here"
          className='fc-input'
        />
        <input
          type="text"
          name="answer"
          value={FC.answer}
          onChange={handleChange}
          placeholder="Enter the correct answer here"
          className='fc-input'
        />
        <button type="submit" className='create-list-btn'>
          Add Flashcard
        </button>
      </form>

      <div className='flashcard-list'>
        <h3>Existing Flashcards:</h3>
        <ul>
          {flashcards.map((flashcard, index) => (
            <li key={index} className='flashcard-item'>
              <strong>Q:</strong> {flashcard.message} <br />
              <strong>A:</strong> {flashcard.answer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FCForm;
