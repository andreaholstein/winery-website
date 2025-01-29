/// ------------ FXNALITY ------------
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
// ------------ COMPONENTS ------------
import HomePage from './pages/HomePage/HomePage.jsx'
// ------------ STYLES ------------
import './App.scss'
import './styles/global.scss'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
