import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import CreateFC from './components/CreateFC';
import ViewFC from './components/ViewFC';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [flashcardLists, setFlashcardLists] = useState({});

  const createNewList = (listName) => {
    if (!flashcardLists[listName]) {
      setFlashcardLists({
        ...flashcardLists,
        [listName]: []
      });
    }
  };

  const addToFlashcardList = (listName, flashcard) => {
    if (flashcardLists[listName]) {
      setFlashcardLists({
        ...flashcardLists,
        [listName]: [...flashcardLists[listName], flashcard]
      });
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route
            path="/create-flash-cards"
            element={
              <CreateFC
                flashcardLists={flashcardLists}
                createNewList={createNewList}
                addToFlashcardList={addToFlashcardList}
              />
            }
          />
          <Route
            path="/view-flash-cards"
            element={<ViewFC flashcardLists={flashcardLists} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
