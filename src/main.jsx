import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'
import './styles/pages.css'
import './styles/brand-supper-club.css'
import './styles/brand-diner.css'
import './styles/brand-bar.css'
import './styles/brand-umbrella.css'
import './styles/scrapbook.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
