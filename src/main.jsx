import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PrivacyPolicy from './PrivacyPolicy.jsx'
import TermsConditions from './TermsConditions.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {window.location.pathname === '/privacy-policy' ? (
  <PrivacyPolicy />
) : window.location.pathname === '/terms-and-conditions' ? (
  <TermsConditions />
) : (
  <App />
)}
  </StrictMode>,
)
