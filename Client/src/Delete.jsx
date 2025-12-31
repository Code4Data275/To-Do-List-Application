import axios from "axios";
import { useEffect, useState } from "react";

export default function Delete(){
    const [id, setId] = useState("");
    const [data, setData] = useState([]);
    
    const onHandleChange = (e) =>{
        setId(e.target.value)
    }

    const fetchData = async() =>{
        try{
            const res = await axios.get('http://localhost:3000/todos');
            setData(res.data.data);
        }catch(err){
            console.log(err);
        }
    }

    const deleteTask = async(e)=>{
        e.preventDefault();

        if(!id.trim()){
            alert("Please enter the ID");
            return;
        }

        try{
            await axios.delete(`http://localhost:3000/todos/${id}`)
            setId("");
            fetchData();
            alert("Task deleted successfully");
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <>
            <div className="text-center text-4xl pt-10 font-mono">
                <h1>Delete a Task</h1>
            </div>
            <div>
                <form onSubmit={deleteTask}>
                    <label>
                        <input type="text" placeholder="ID" className="ml-145 mt-10 w-60 p-2 border border-black rounded-xl focus:bg-yellow-500" name="id" value={id} onChange={onHandleChange}/>
                        <button type="submit" className="p-4 m-6 bg-green-600 rounded-xl w-30 h-14 hover:bg-yellow-500">Delete</button>
                    </label>
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
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </>
        );
}