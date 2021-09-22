const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model("Task", taskSchema);