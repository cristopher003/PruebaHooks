import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { SimpleForm } from './useEffect/SimpleForm'
import { SimpleFormWithCustom } from './useEffect/SimpleFormWithCustom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <SimpleFormWithCustom/>
  </React.StrictMode>,
)
