const { findByIdAndUpdate } = require('../models/task')
const task = require('../models/task')
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
    const task = req.body;

    await Task.findByIdAndUpdate(id, {task: task}, {new: true})
    
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
