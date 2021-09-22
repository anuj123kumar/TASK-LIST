import React from "react";
import CreateTask from "./components/createTask";
import ShowTask from "./components/showTask";
import { Container, AppBar, Typography } from '@material-ui/core';
import useStyles from './style';
// import Task from './components/createTask'
import { Paper, TextField } from "@material-ui/core";
import { Checkbox, Button } from "@material-ui/core";
import "./App.css";

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth = "lg">
        <AppBar className = {classes.appBar} position = "static" color = "inherit" >
          <Typography className = {classes.heading} variant = "h2" align = "center"> TO - DO </Typography>
        </AppBar>  
        <CreateTask/>
        <ShowTask/>
      </Container>
    </div>
  );
}

export default App;