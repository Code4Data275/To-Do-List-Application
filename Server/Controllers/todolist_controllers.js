const Task = require('../Model/todolist_model')

exports.getAllTasks = async(req,res) => {
    try{
        const tasks = await Task.find()

        res.status(200).json({
            success: true,
            data: tasks
        });
    }catch(err){
        res.status(500).json({
            success: false,
            message: "server error",
            error: err.message
        })
    }
}

exports.addNewTasks = async(req,res) =>{
    try{
        const {description, status} = req.body;

        if(!description){
            return res.status(400).json({
                success: false,
                message: "Please provide all the details"
            })
        }

        const newTask = await Task.create({description, status: status ?? false});
        

        res.status(200).json({
            success: true,
            message: 'Task added successfully',
            data: newTask
        });
    }catch(err){
        res.status(500).json({
            success: false,
            message: "server error",
            error: err.message
        })
    }
}

exports.updateTaskbyID = async (req,res) =>{
    try{
        const {id} = req.params;
        const {description} = req.body;

        if(!description){
            return res.status(400).json({
                success: false,
                message: "Description is required"
            });
        }
        
        const updateTask = await Task.findByIdAndUpdate(
            id,
            {description},
            {new: true}
        );

        if(!updateTask){
            return res.status(401).json({
                success: false,
                message: `Task not found for ${id}`
            });
        }

        res.status(200).json({
            success: true,
            message: `Task update successfully`,
            data: updateTask
        });
    }catch(err){
        res.status(500).json({
            success: false,
            message: "server error",
            error: err.message
        })
    }
}

exports.deleteTaskByID = async (req, res) =>{
    try{
        const {id} = req.params;
        const task = await Task.findById(id);

        if(!task){
            return res.status(404).json({
                success: false,
                message: `No task found for id:${id}`
            });
        }

        await Task.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: 'Task deleted successfully'
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: "server error",
            error: err.message
        })
    }
}

exports.updateStatus = async (req, res) =>{
    try{
        const {id} = req.params;
        const {status} = req.body;

        if(typeof status !== "boolean"){
            return res.status(400).json({
                success: false,
                message: "Status must be boolean"
            });
        }

        const updateStatus = await Task.findByIdAndUpdate(
            id,
            {status},
            {new: true}
        );

        if(!updateStatus){
            return res.status(401).json({
                success: false,
                message: `Task not found for ${id}`
            });
        }

        res.status(200).json({
            success: true,
            message: `Status updated successfully for task ${id}`,
            data: updateStatus
        });
    }catch(err){
        res.status(500).json({
            success: false,
            message: "server error",
            error: err.message
        })
    }
}

exports.searchTask = async(req, res)=>{
    const {query} = req.query;

    const tasks = await Task.find({
        description: {$regex: query, $options: "i"},
    });

    if(!tasks){
        return res.status(404).json({error: 'No tasks found'});
    }
    res.json(tasks);
}

