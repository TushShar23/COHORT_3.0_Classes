import {create} from 'zustand';

const useTaskStore = create((set)=>({
    tasks: [{ title:"Go to Gym" , state:"ONGOING"},{ title:"Complete assignment" , state:"DONE"}],

    // adding a method for adding task
    addTask : (title,status)=>set((state)=>({tasks:[...state.tasks,{title:title,state:status}]}))
    // addtask is a function which takes two things as parameter (title,status) and inside that we are running set() in which there is a callback which takes the state:current state and that function is doing the main task of adding a new task in the task array and using SPREAD OPERATOR WE ARE FIRST SPREADING THE PREVIOUS ARRAY AND THEN ADDING NEW TASK INTO IT.
}))

export default useTaskStore;