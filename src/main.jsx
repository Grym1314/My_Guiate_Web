import React from 'react'
import ReactDOM from 'react-dom/client'
import Banner from './view/LandingPage/Banner/index.jsx'
import NavBar from './view/LandingPage/Navbar/index.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <Banner/>
  </React.StrictMode>,
)
