import {create} from 'zustand'
import {persist} from 'zustand/middleware'

// persist is a middleware from zustand which will persist our data in the localstorage of browser.
const useTaskStore = create(persist((set,get)=>({
    tasks: [],

    // adding a method for adding task
    
    addTask : (title,status)=>{

        /*
        first we are checking on "adding task" that whether the task already exist ? if yes then pop up an alert with a msge "task already exists". AS WE CANNOT DIRECTLY CHECK IN LOCALSTORAGE WHEN USING "persist middleware".WHY ?
        // 1 Persist already parsed it

        // 2 Storage format is internal to Zustand

        // 3 You’ll break if structure changes

        // 4 Causes bugs with hydration timing

*************** Hydration is React’s process of attaching event handlers and state to server-rendered HTML.************


//         get → read the current store state

// 👉 get().tasks returns the entire current state object(tasks) of the store.

*/

        const TaskArr = get().tasks
        const exists = TaskArr.some(t=>t.title === title)
        console.log(TaskArr,exists)
        if(exists){
            alert("Task already exists")
            return
        }

        if(title.trim() === "" ){
           alert("Invalid value")
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

       
    },
    // addtask is a function which takes two things as parameter (title,status) and inside that we are running set() in which there is a callback which takes the state:current state and that function is doing the main task of adding a new task in the task array and using SPREAD OPERATOR WE ARE FIRST SPREADING THE PREVIOUS ARRAY AND THEN ADDING NEW TASK INTO IT.


    // THIS IS DELETE TASK FUNCTIONALITY.Coz our unique key is our TITLE we just filter the all the tasks and which matches the provided title we do not put that title inside the new tasks array
    deleteTask : (title)=> set( (store)=>({tasks:store.tasks.filter((task)=>task.title !== title)}) ) , 
    
    moveTask: (taskId,status)=>set((store)=>({tasks:store.tasks.map((task)=>task.title === taskId ? {...task, state:status}: task )}))
    // moveTask is a function which takes taskId and Status as parameter and inside this function(implicit function) it runs "SET function" which returns partial object and inside the set function we run another arrow function which takes "store" as a parameter and inside the function in TASKS we are ITERATING OVER TASKS  using map which takes a function as an argument and that function is taking an argument as "task" so we are inside the function checking that the current task's title is equal to "taskId(which is the title of the task which we want to move)" if match then make a new object {having that task or concatenate that task} and update the state else WAISE HI REHNE DO TASK.
})),{name:"Task-storage"})

export default useTaskStore;