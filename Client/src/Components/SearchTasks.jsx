import axios from 'axios';
import React, { useState } from 'react';


const SearchTasks = () => {
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const [task, setTask] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const searchTasks = async(e)=>{
    e.preventDefault();
    setHasSearched(true);

    if(search.trim() === ""){
        setMessage("Please enter something to search");
        setTask([]);
        return;
    }

    try{
        const response = await axios.get(`http://localhost:3000/todos/search?query=${search}`);

        if(response.data.length === 0){
            setMessage("No tasks found");
            setTask([]);
        }else{
            setTask(response.data);
            setMessage("");
        }
    }catch(err){
        console.log("Search error",err.message);
        setMessage('Error while searching');
    }
  }
  return (
    <>
        <div className='bg-white m-4 p-4 w-150 h-auto rounded-xl'>
            <h3 className='m-4 text-2xl font-bold text-mono'>Search a Task</h3>
            <form onSubmit={searchTasks}>
                <label for="text-2xl">Search for a task</label><br />
                <input type="text" placeholder='Search tasks...' value={search} onChange={(e)=>setSearch(e.target.value)} className='w-90 m-4 p-1 border border-black rounded-xl pl-4 pt-2 pb-2'/>
                <button type='submit' className='bg-amber-400 rounded-2xl border border-amber-400 p-2 w-40 mt-5 duration-200 hover:bg-amber-300'>Search</button>
            </form>
           {hasSearched && message && (
            <p className='mt-4 text-gray-400'>{message}</p>
           )}
           {task.map((task)=>(
            <div key={task._id} className='border mt-3 p-3 border-gray-300 rounded shadow-lg shadow-gray-300'>
                <h4 className='font-semibold'>{task.description}</h4>
                <p className={`text-sm mt-1 font-medium ${task.status ? "text-green-600":"text-yellow-600"}`}>Status: {task.status ? "Completed" : "Pending"}</p>
            </div>
           ))}
        </div> 
    </>
  )
}

export default SearchTasks
