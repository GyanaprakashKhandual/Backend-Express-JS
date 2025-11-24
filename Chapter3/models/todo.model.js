import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({

    //TODO: Define the schema fields here
    content: {
        type: String,
        required: true
    }

});

const Todo = mongoose.model('Todo', todoSchema);
export default Todo;