const Task = require('../Model/todolist_model')

exports.getAllTasks = async(req,res) => {
    const tasks = await Task.find()

    if(!tasks || tasks.length === 0){
        return res.status(404).json({
            success: false,
            message: 'No tasks found'
        })
    }
    res.status(200).json({
        success: true,
        data: tasks
    })
}

exports.addNewTasks = async(req,res) =>{
    const {data} = req.body;

    if(!data || Object.keys(data) === 0){
        return res.status(404).json({
            success: false,
            message: "Please provide all the details"
        })
    }

    await Task.create(data);
    const allTasks = await Task.find();

    res.status(200).json({
        success: true,
        message: 'Task added successfully',
        data: allTasks
    });
}

exports.updateTaskbyID = async (req,res) =>{
    const {id} = req.params;
    const {data} = req.body;

    const updateTask = await Task.findOneAndUpdate(
        {_id: id},
        data,
        {new: true}
    );

    if(!updateTask){
        return res.status(404).json({
            success: false,
            message: `Task not found for ${id}`
        });
    }

    res.status(200).json({
        success: false,
        message: `Task update successfully`,
        data: updateTask
    });
}

exports.deleteTaskByID = async (req, res) =>{
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
}

