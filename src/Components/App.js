import React from 'react'
import Register from './Register/Register'
import Login from './Login/Login'
import Layout from '../Pages/Layout'
import Home from '../Pages/Home'
import Public from '../Pages/Public'
import Admin from '../Pages/Admin'
import Editor from '../Pages/Editor'
import Lounge from '../Pages/Lounge'
import Unauthorize from '../Pages/Unauthorize'
import Missing from '../Pages/Missing'
import RequireAuth from '../Utils/RequireAuth'
import ROLES from '../Utils/Roles'
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
          <Route path='/unauthorized' element={<Unauthorize />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path='/home' element={<Home />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
          <Route path='/editor' element={<Editor />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path='/admin' element={<Admin />} />
        </Route>
        <Route
          element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Editor]} />}
        >
          <Route path='/lounge' element={<Lounge />} />
        </Route>

        <Route path='/*' element={<Missing />} />
      </Routes>
    </>
  )
}

export default App
