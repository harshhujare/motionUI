import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Router, Link, Routes } from "react-router-dom";
import Account from './components/Account.jsx';
createRoot(document.getElementById('root')).render(
 
 <StrictMode>
  <BrowserRouter>
 <Routes>
    <Route path="/" element={<App />}        />
     <Route path="/Account" element={<Account/>}        />
    
 </Routes>
   
    </BrowserRouter>
  </StrictMode>,
)