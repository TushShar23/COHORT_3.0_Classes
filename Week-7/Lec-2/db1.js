const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    email: {type:String,unique:true},
    password: String,
    name: String
})


const Todo = new Schema({
    title: String,
    done: Boolean,
    userId: Schema.Types.ObjectId
})

const UserModel = mongoose.model('users1',User);
const TodoModel = mongoose.model('todos1',Todo);

module.exports=({
    UserModel: UserModel,
    TodoModel: TodoModel
})