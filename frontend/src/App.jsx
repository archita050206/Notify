import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Notes from './pages/Notes';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
     <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
