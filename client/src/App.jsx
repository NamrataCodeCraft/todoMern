import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import {  Routes, Route } from "react-router";
import Signup from './components/Signup';
import Login from './components/Login';



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />  
      </Routes>
    </>
  )
}

export default App