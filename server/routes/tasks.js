const Task = require("../models/task");
const express = require("express");
const router = express.Router();

const { createTask, getTask, updateTask, deleteTask , test} = require("../controllers/tasks")

router.post("/create", createTask ); 

router.get("/get", getTask );

router.put("/update/:id", updateTask );

router.delete("/delete/:id", deleteTask );

//router.get("/", test)

module.exports = router;