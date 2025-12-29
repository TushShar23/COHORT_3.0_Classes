import {create} from 'zustand';

const useTaskStore = create((set)=>({
    tasks: [{ title:"Go to Gym" , state:"ONGOING"},{ title:"Complete assignment" , state:"DONE"}],

    // adding a method for adding task
    addTask : (title,status)=>{
        if(title.trim() === ""){
            alert("Invalid value");
            return 
        }

        set((state)=>({tasks:[...state.tasks,{title:title,state:status}]}))
        /*
        *****************************
        SET : set is a function that Zustand itself creates and passes to you.SET() ALWAYS EXPECT AN OBJECT IN RETURN VALUE.
        set() ko jo return hota hai = next state ka object (ya partial object)mtlb updated state return ho jaati hai 
        Ek plain JavaScript object return kiya hai

        parameter = tasks:[{},{}]
        return = tasks:[{},{},{}]
        
        ********************************
        
        */
    
    }
    // addtask is a function which takes two things as parameter (title,status) and inside that we are running set() in which there is a callback which takes the state:current state and that function is doing the main task of adding a new task in the task array and using SPREAD OPERATOR WE ARE FIRST SPREADING THE PREVIOUS ARRAY AND THEN ADDING NEW TASK INTO IT.
}))

export default useTaskStore;