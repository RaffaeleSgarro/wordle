import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { AlertProvider } from './context/AlertContext'
import reportWebVitals from './reportWebVitals'
import SplashScreen from './SplashScreen'

if ((window as any).USER_ID === '') {
  (window as any).location = '/pediagames/wordle.asp'
}

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider>
      <SplashScreen />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
