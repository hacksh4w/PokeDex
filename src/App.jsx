import React, { useEffect, useState } from 'react'
import PokemonThumb from './components/PokemonThumb/PokemonThumb'
import Filters from "./pages/Filters"
import Home from "./pages/Home"
import About from "./pages/About"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'


const App = () => {

   

  return (
    <>
     
    <BrowserRouter>
      <Navbar/>
      <div className="app-contaner">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/filters" element={<Filters/>} />
      </Routes>
      </div>
      
      </BrowserRouter>
      
    </>
  );
}

export default App;