import React from 'react'
import Register from './Register/Register'
import Login from './Login/Login'
import Layout from '../Pages/Layout'
import Home from '../Pages/Home'
import Public from '../Pages/Public'
import Admin from '../Pages/Admin'
import GlobalStyle from './GlobalStyles'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Public />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>

        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
