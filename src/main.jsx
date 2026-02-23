import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SimpleForm } from './components/SimpleForm.jsx'
import { StudentForm } from './ai_components/StudentForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SimpleForm />
  </StrictMode>,
)
