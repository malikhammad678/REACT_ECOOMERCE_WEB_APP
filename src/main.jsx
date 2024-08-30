import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvidor from './context/ShopContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ShopContextProvidor>
    <App />
    </ShopContextProvidor>
    </BrowserRouter>
    
  </StrictMode>,
)
