import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


const App = lazy(()=>import('./App.jsx'))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div className='text-center mt-100 text-2xl'>Loading...</div>}>
      <App />
    </Suspense>
  </StrictMode>,
)
