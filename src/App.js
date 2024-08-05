import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import CreateFC from './components/CreateFC';
import ViewFC from './components/ViewFC'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';


function App() {

  
const flashcards = [
  {id: 1, message: "test data"},
  {id: 2, message: "test data"},
  {id: 3, message:"test data"}
]
  return (
    
   <div className="App">

    <Router>
    <Navbar/>
      <Routes>
        
      <Route path="/" element={<Hero />} />
      <Route path="/create-flash-cards" element={<CreateFC fcs={flashcards}/>} />
      <Route path="/view-flash-cards" element={<ViewFC fcs={flashcards}/>} />
      </Routes>
    </Router>
    
   </div>
  );
}

export default App;
