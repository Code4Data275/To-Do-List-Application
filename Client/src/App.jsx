import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import Navbar from './Components/navbar'
import Home from './pages/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-screen bg-gray-200 p-4'>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
