const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose');
const task = require('./routes/tasks');
const app = express()
const bodyParser = require('body-parser')

const port = process.env.port || 8000;

const databaseURL = 'mongodb+srv://Anuj:todo123@cluster0.z2vve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('DB CONNECTED')
})
.catch( (err) => {
    console.log(err)
})


app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

app.use("/tasks", task)

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
}) 
