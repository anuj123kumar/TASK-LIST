import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));


export default function CreateTask() {
    const classes = useStyles();


    const [ task , setTask ] = useState({
        task: ''
    })

    const createTask = () => {
        axios.post('http://localhost:8000/tasks/create', task).then( () => {
            window.location.reload(false)
        })
    }

    return (
        <>
        <h2> To-Do </h2>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Task" variant="outlined" value = {task.task} onChange={(event) => {
                setTask({ ...task, task: event.target.value})
            }}/>

            <Button variant="contained" color="primary" onClick= {createTask}>
                Add
            </Button>
        </form>
        </>
    )
}
