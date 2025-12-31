const Task = require('../Model/todolist_model')

exports.getAllTasks = async(req,res) => {
    try{
        const tasks = await Task.find()

        if(!tasks || tasks.length === 0){
            return res.status(400).json({
                success: false,
                message: 'No tasks found'
            })
        }
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

        if(!description || !status){
            return res.status(400).json({
                success: false,
                message: "Please provide all the details"
            })
        }

        await Task.create({description, status});
        const allTasks = await Task.find();

        res.status(200).json({
            success: true,
            message: 'Task added successfully',
            data: allTasks
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

        if(!status){
            return res.status(400).json({
                success: false,
                message: "Status is required"
            });
        }

        const normalizedStatus = status.toLowerCase();

        const updateStatus = await Task.findByIdAndUpdate(
            id,
            {status: normalizedStatus},
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

