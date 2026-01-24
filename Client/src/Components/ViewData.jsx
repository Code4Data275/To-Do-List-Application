import React from "react"
import { useTaskContext } from "../hooks/useTaskContext";
import axios from "axios";

const ViewData = ({task}) => {
    const {dispatch} = useTaskContext();

    const handleDelete = async (e) =>{
        const response = await axios.delete(`http://localhost:3000/todos/${task._id}`);

        if(response.status === 200){
            dispatch({type:'DELETE_TASK',payload:task._id})
        }
    }

    const handleUpdate = async(e) =>{
        const newDescription = prompt('Update Task',task.description);
        if(!newDescription) return;
        const response = await axios.put(`http://localhost:3000/todos/${task._id}`,{description: newDescription});
  
        if(response.status === 200){
            dispatch({type:'UPDATE_TASK',payload:response.data.data})
        }
    }

    const handleStatusToggle = async() =>{
        const response = await axios.put(`http://localhost:3000/todos/status/${task._id}`,{status: !task.status});

        if(response.status === 200){
            dispatch({type:"UPDATE_TASK",payload:response.data.data});
        }
    }


  return (
        <tr>
            <td className='p-4 text-center'>{task.description}</td>
            <td className='p-4 text-center'>
                <input type='checkbox' className='pl-2' checked={!!task.status} onChange={handleStatusToggle} />
                <span className="p-4">{task.status ? "Completed":"Pending"}</span>
            </td>
            <td className='p-4 text-center'>
                <button className="bg-amber-400 rounded-2xl border border-amber-400 p-2 w-40 mt-5 duration-200 hover:bg-amber-300" onClick={handleUpdate}>Update Task</button>
            </td>
                <td className='p-4 text-center'>
                    <button className="bg-amber-400 rounded-2xl border border-amber-400 p-2 w-40 mt-5 duration-200 hover:bg-amber-300" onClick={handleDelete}>Delete Task</button>
                </td>
        </tr>

  )
}

export default ViewData
