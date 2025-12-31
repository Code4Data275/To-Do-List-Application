import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import { Suspense, lazy } from 'react'

const Add = lazy(()=>import('./Add'));
const Update = lazy(()=>import('./Update'));
const Delete = lazy(()=>import('./Delete'));
const Status = lazy(()=>import('./UpdateStatus'));

function App() {
  return (
    <>
      <BrowserRouter>
          <div className='w-full bg-green-600 h-20 flex gap-40'>
              <div className='text-2xl p-4 font-mono'>
                <h1>To Do List Application</h1>
              </div>
              <div>
                <nav className='pt-4 text-2xl'>
                  <Link to='/add' className='hover:bg-yellow-500 rounded-xl p-2'>Add a Task</Link> |{" "}
                  <Link to='/update' className='hover:bg-yellow-500 rounded-xl p-2'>Update the Task</Link> |{" "}
                  <Link to='/delete' className='hover:bg-yellow-500 rounded-xl p-2'>Delete the Task</Link> |{" "}
                  <Link to='/status' className='hover:bg-yellow-500 rounded-xl p-2'>Update the status</Link> 
                </nav>
              </div>
          </div>
          <Routes>
            <Route path='/add' element={
              <Suspense fallback={<div className='text-center mt-100 text-2xl'>Loading...</div>}>
                <Add />
              </Suspense>
            }/>  
            <Route path='/update' element={
              <Suspense fallback={<div className='text-center mt-100 text-2xl'>Loading...</div>}>
                <Update />
              </Suspense>}/>
            <Route path='/delete' element={
              <Suspense fallback={<div className='text-center mt-100 text-2xl'>Loading...</div>}>
                <Delete />
              </Suspense>
            }/>
            <Route path='/status' element={
              <Suspense fallback={<div className='text-center mt-100 text-2xl'>Loading...</div>}>
                <Status />
              </Suspense>
            }/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
