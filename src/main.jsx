import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Usecntext from './Component/UseContext/Usecntext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Usecntext>
    <App />
    </Usecntext>
  </React.StrictMode>,
)
