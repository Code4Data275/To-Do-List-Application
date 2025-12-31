import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function UpdateStatus(){
    const [input,setInput] = useState({
        id: "",
        status: ""
    });
    const [data,setData] = useState([]);
    
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values, [name]: value}));
    }

    const fetchData = async() =>{
        try{
            const res = await axios.get('http://localhost:3000/todos');
            setData(res.data.data);
        }catch(err){
            console.log(err);
        }
    }

    const updateStatus = async(e) =>{
        e.preventDefault();

        if(!input.id || !input.status){
            alert('Please enter all the details');
            return;
        }

        try{
            await axios.put(`http://localhost:3000/todos/status/${input.id}`,{status: input.status});
            setInput({id:"",status:""})
            fetchData();
            alert('Status updated successfully');
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
                <h1>Update the status</h1>
            </div>
            <div>
                <form onSubmit={updateStatus}>
                    <label>
                        <input type="text" placeholder="ID" className="ml-145 mt-10 w-60 p-2 border border-black rounded-xl focus:bg-yellow-500" name="id" value={input.id} onChange={handleChange}/>
                        <select name="status" value={input.status} onChange={handleChange} className="ml-145 mt-10 w-60 p-2 border border-black rounded-xl focus:bg-yellow-500">
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                        </select>
                        <button type="submit" className="p-4 m-6 bg-green-600 rounded-xl w-30 h-14 hover:bg-yellow-500">Update</button>
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

export default UpdateStatus;