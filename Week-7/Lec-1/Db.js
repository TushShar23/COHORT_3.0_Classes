// Here we will create our DB schemas and models and export all the models so that we can use all the models in our backend/API endpoints

const mongoose = require('mongoose');
const Schema = mongoose.Schema; // schema is a class in mongoose which we are using by destructuring into Schema variable.
const ObjectId = mongoose.Schema.Types.ObjectId;
const type = mongoose.Schema.Types;

// we need to define schemas

const User = new Schema({
    username: type.String,
    role: type.String,
    age: type.Int32,
    name: type.String
})
// Here we have defined user schema


const Todo = new Schema({
    title: String,
    done: type.Boolean,
    userId: ObjectId
})
// Here we have defined Todo schema

const UserModel = mongoose.model('users',User);
const TodoModel = mongoose.model('todos',Todo);

//humne ab inn schemas ka memory mei ek model bana liya jo ki hum use karenge hmaare routes wale folder mei.Hume kuch toh chahiye hoga na jo ki user aur todos collection ko represent kare wahi UserModel aur TodoModel kar rahe hai bs. pehle collection ka naam then uske liye konsi schema hai.

module.exports={
    UserModel: UserModel,
    TodoModel: TodoModel
}


