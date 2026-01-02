import { useState, useEffect } from "react";
import axios from "axios";

export default function Add(){
    const [input, setInput] = useState({
        "description": "",
        "status": "Pending"
    });

    const [data, setData] = useState([]);

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values, [name]: value}))
    }

    const fetchData = async () =>{
        try{
            const res = await axios.get('https://to-do-list-application-9j0z.onrender.com/todos');
            console.log(res.data)
            setData(res.data.data)
        }catch(err){
            console.log(err);
        }
    }

    const addTasks = async(e) =>{
        e.preventDefault();

        try{
           await axios.post('https://to-do-list-application-9j0z.onrender.com/todos',input);
           fetchData();
           alert('Task Added');
           window.location.reload();
        }catch(err){
            console.log(err);
        }
    }
    
    useEffect(()=>{
        fetchData();
    },[])

    return(
        <>
            <div className="text-center text-4xl pt-10 font-mono">
                <h1>Add a Task</h1>
            </div>
            <div>
                <form onSubmit={addTasks}>
                        <input 
                            type="text" 
                            placeholder="Add a task" 
                            className="ml-145 mt-10 w-100 p-2 border border-black rounded-xl focus:bg-yellow-500" 
                            name="description"
                            value={input.description} 
                            onChange={handleChange}
                        />  
                        <button type="submit" className="p-4 m-6 bg-green-600 rounded-xl w-30 h-14 hover:bg-yellow-500">Add</button>
                </form>
            </div>
            <div>
                {data.length === 0 ? (
                    <p className="text-center mt-6">No Tasks added yet</p>
                ) : (
                    <table border={1} className="ml-60 mt-5">
                        <thead>
                            <tr>
                                <th className="border p-2 w-100">ID</th>
                                <th className="border p-2 w-100">Description</th>
                                <th className="border p-2 w-100">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((task)=>{
                                return(
                                    <tr key={task._id}>
                                        <td className="border p-2 text-center">{task._id}</td>
                                        <td className="border p-2 text-center">{task.description}</td>
                                        <td className="border p-2 text-center">{task.status}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}