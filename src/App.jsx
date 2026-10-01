import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WelcomeScreen from './components/WelcomeScreen'
import LoadAudit from './components/LoadAudit'
import Navigation from './components/Navigation'
import Panel from './components/Panel'
import Battery from './components/Battery'
import Inverter from './components/Inverter'
import ChargeController from './components/ChargeController'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<WelcomeScreen />} />
      <Route path='/loadaudit' element={<LoadAudit />} />
      <Route path='/navigation' element={<Navigation />}/>
      <Route path='/panel' element={<Panel />}/>
      <Route path='/battery' element={<Battery />}/>
      <Route path='/inverter' element={<Inverter />}/>
      <Route path='/chargecontroller' element={<ChargeController />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
