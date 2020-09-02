import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AppStateProvider } from './AppStateContext'

ReactDOM.render(
  <AppStateProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppStateProvider>,
  document.getElementById('root')
)
