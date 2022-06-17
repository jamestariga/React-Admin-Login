import React from 'react'
import Register from './Register/Register'
import Login from './Login/Login'
import GlobalStyle from './GlobalStyles'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
