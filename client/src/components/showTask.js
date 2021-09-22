import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});




export default function ShowTask() {
    const classes = useStyles();

    const [tasksList, setTaskList] = useState([])

    const [edit, setEdit ] = useState(false);

    const [ task , setTask] = useState();

    useEffect(() => {
        getAll();
    }, [])   
    

    const deleteTask = (id) => {
        axios.delete(`http://localhost:8000/tasks/delete/${id}`).then( () => {
            window.location.reload(false);
        })
    }

    const UpdateTask = (id) => {
        axios.put(`http://localhost:8000/tasks/update/${id}`, task).then( () => {
            window.location.reload(false);
        })
        console.log("Bottonclick")
    }

    const onUpdateClick = (id) => {
        const newTask = tasksList.filter(obj => obj._id === id)
        console.log(newTask)
        setTask({...task, task: newTask[0].task})
        setEdit(!edit)
    } 


    const getAllTask = () => {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:8000/tasks/get')
            .then(response => response.json())
            .then(jsonData => resolve(jsonData))
            .catch(err => resolve({error: `something went wrong err : ${err}`}))
        })
      }


    const getAll = async () => {
        let alltasks = await getAllTask();
        console.log(alltasks.task);
        setTaskList(alltasks.task);
    } 

    
    const editComponent = () => {
        return (
            <>
            <h2> Update Task </h2>
            <form className = {classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Task" variant="outlined" value = {task.task} onChange={(event) => {
                    setTask({ ...task, task: event.target.value})
                }}/>
    
                <Button variant="contained" color="primary" onClick= {UpdateTask}>
                    Update
                </Button>
            </form>
            </>
        )
    }

    
    return (
        <>
            { edit && editComponent() }
            <h2> All tasks</h2>
            {JSON.stringify(task)}
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Tasks</TableCell>
                            <TableCell align="right">Name</TableCell>
                        </TableRow>
                    </TableHead>
                    { tasksList !== undefined && <TableBody>
                        {tasksList.map((task) => (
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    {task.task}
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton aria-label="delete" className={classes.margin} onClick = {() => onUpdateClick(task._id)}>
                                        <Edit fontSize="small" />
                                    </IconButton>
                                    <span> </span>                      
                                    <IconButton aria-label="delete" className={classes.margin} onClick = {() => deleteTask(task._id)}>
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>}
                </Table>
            </TableContainer>
        </>
    )};