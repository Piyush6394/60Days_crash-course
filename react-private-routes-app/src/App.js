import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, About, Contact } from './components/Home'
import Login from './components/Login'
import Products from './components/Products'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem('token'))

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setAuthToken={setAuthToken} />} />
        <Route
          path="/products"
          element={
            <PrivateRoute isAuthenticated={!!authToken}>
              <Products />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App
