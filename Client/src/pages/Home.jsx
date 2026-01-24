import React, { useEffect } from 'react'
import Add from '../Components/Add'
import ViewData from '../Components/ViewData';
import { useTaskContext } from '../hooks/useTaskContext';
import axios from "axios";
import SearchTasks from '../Components/SearchTasks';

const Home = () => {
  const {tasks, dispatch} = useTaskContext();

  useEffect(()=>{
    const fetchTasks = async ()=>{
        const response = await axios.get('http://localhost:3000/todos');

        if(response.status === 200){
            dispatch({type:'SET_TASK',payload:response.data.data});
        }
    }
    fetchTasks();
    console.log(tasks);
  },[dispatch]);

  return (
    <>
        <div className='grid grid-cols-2 gap-10'>
            <Add />
            <SearchTasks />
        </div>
        <div>
            <div>
                <table className='w-full border mt-10'>
                    <thead className='bg-gray-400'>
                        <tr>
                            <th className='p-4'>Task Description</th>
                            <th className='p-4'>Status</th>
                            <th className='p-4'></th>
                            <th className='p-4'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks && tasks.length === 0 ? (
                            <tr>
                                <td colSpan="4" className='text-center p-10 text-black'>
                                    No tasks added yet
                                </td>
                            </tr>
                        ):
                        (tasks.map((task)=>(
                            <ViewData key={task._id} task={task}/>
                        ))
                        )}
                    </tbody>        
                </table>
            </div>
        </div>
    </>
  )
}

export default Home
