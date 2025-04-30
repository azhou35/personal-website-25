import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'

const EveryRedirect = () => {
  useEffect(() => {
    window.location.href = '/every.html'
  }, [])
  return null
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/every" element={<EveryRedirect />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
