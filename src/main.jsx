import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import 'font-awesome/css/font-awesome.min.css';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_pUBLISHABLE_KEY

if(!PUBLISHABLE_KEY){
  throw new Error('Add your clerk Publishable key to the .env file')
}

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ClerkProvider>,
)
