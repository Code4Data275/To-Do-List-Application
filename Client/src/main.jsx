import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TaskContextProvider } from './Context/TaskContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
)
