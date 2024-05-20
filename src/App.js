import React from 'react'
import Registration from './pages/Registration'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Registration />} />
    </Routes>
      
    </>
  )
}

export default App
