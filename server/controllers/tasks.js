const Task = require('../models/task')

exports.createTask = async (req, res) => {
    const task = req.body
    const newtask = new Task(task)
    await newtask.save((error, task) => {
        if(error){
            return res.status(400).json(error)
        }
        res.json(task)
    })
    
}


exports.getTask = async (req, res) => {
    await Task.find().exec( (error, task) => {
        if(error){
            return res.status(400).json({
                message: "Unable to find any user",
                error: error
            })
        }
        res.json({task})
    })
} 

exports.updateTask = async (req, res) => {
    const id = req.params.id;
    await Task.findByIdAndUpdate(
        { _id: id},
        { $set: req.body},
        { new: true, useFindAndModify: false},
        (err, updatedTask) => {
            if(err){
                return res.status(400).json({
                    error: err
                })
            }
            res.status(200).json({updatedTask})
        }
    )
    
}

exports.deleteTask = async (req, res) => {
    const id = req.params.id;
    await Task.findByIdAndDelete( {_id: id}, (error, task) => {
        if(error){
            return res.status(400).json(error)
        }
        res.json(task)
    })
}
