import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from './components/Sidebar'

import Home from './pages/Home';
import Register from './Pages/Register';
import Xbox from './Pages/Xbox';
import PlayStation from './Pages/PlayStation';
import Nintendo from './Pages/Nintendo';


const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nintendo' element={<Nintendo />} />            
          <Route path='/playstation' element={<PlayStation />} />    
          <Route path='/xbox' element={<Xbox />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router> 
    </>
  )
}

export default App
