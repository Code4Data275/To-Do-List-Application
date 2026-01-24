import React, { useState } from 'react'
import { useTaskContext } from '../hooks/useTaskContext';
import axios from 'axios';

const Add = () => {
  const {dispatch} = useTaskContext();
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const task = {description};
    const response = await axios.post('https://to-do-list-application-1-b4fh.onrender.com/todos',{description, status: false});

    if(response.status === 200){
      dispatch({type:'CREATE_TASK',payload:response.data.data});
      setDescription('');
    }
  }

  return (
    <>
        <div className='bg-white m-4 p-4 w-150 h-auto rounded-xl'>
            <h3 className='m-4 text-2xl font-bold text-mono'>Add a Task</h3>
            <form onSubmit={handleSubmit}>
                <label className='text-2xl'>Task:</label>
                <input type="text" className='w-90 m-4 p-1 border border-black rounded-xl pl-4 pt-2 pb-2' value={description} onChange={(e)=>setDescription(e.target.value)} /><br />
                <button className='bg-amber-400 rounded-2xl border border-amber-400 p-2 w-40 mt-5 ml-40 duration-200 hover:bg-amber-300'>Add Task</button>
            </form>
        </div>
    </>
  )
}

export default Add
