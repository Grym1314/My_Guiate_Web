import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Banner from './view/LandingPage/Banner/index.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Banner/>
    <App />
  </React.StrictMode>,
)
