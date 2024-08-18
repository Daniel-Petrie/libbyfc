import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import CreateFC from './components/CreateFC';
import ViewFC from './components/ViewFC'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import { useState } from 'react';


function App() {

  
const flashcards = [
  {id: 1, message: "test data"},
  {id: 2, message: "test data"},
  {id: 3, message:"test data"}
]

const [fcList, setFcList] = useState(flashcards)

  return (
    
   <div className="App">

    <Router>
    <Navbar/>
      <Routes>
        
      <Route path="/" element={<Hero />} />
      <Route path="/create-flash-cards" element={<CreateFC fcList={fcList} setFcList={setFcList}/>} />
      <Route path="/view-flash-cards" element={<ViewFC fcList={fcList}/>} />
      </Routes>
    </Router>
    
   </div>
  );
}

export default App;
