import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'
// import GlobalStyle from '../src/Components/GlobalStyles'
import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Routes>
          {/* <GlobalStyle /> */}
          <Route path='/*' element={<App />} />
        </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>
)
