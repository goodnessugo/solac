import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WelcomeScreen from './components/WelcomeScreen'
import LoadAudit from './components/LoadAudit'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<WelcomeScreen />} />
      <Route path='/loadaudit' element={<LoadAudit />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
