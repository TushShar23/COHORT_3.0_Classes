import React from 'react';
import {useState,useEffect} from 'react';


// we are creating  todo component which will have 4 buttons t1,t2,t3 and t4
// we need to fetch the todo data from an external API
// when we click t1 it shows the title of the todo1 and same with other buttons

// we need 3 state variables first for storing todo, second for todoData, third for loader

// There is a problem when we click on button and when data is displayed between this we need to show something like loader.. coz button is clicked but there is slight gap between data being displayed.

function TodoComponent(){
    const [currentTodo,setTodo] = useState(1);
    const [tabData,setTabData] = useState({});
    const [loader,setLoader] = useState(false);
    // at first loader is false

    useEffect(()=>{
        setLoader(true);
        fetch("http://jsonplaceholder.typicode.com/todos/"+ currentTodo)
        .then(async(res)=>{
            const response = await res.json(); // converting to json() is any async task
            setTabData(response);// this will put the response in tabData
            setLoader(false);
        })
    },[currentTodo])

    

    
    // the moment currentTodo changes means we click on button useEffect will run and then react will re-render our app().

    return(
        <div>
            <div>
                <button onClick={()=>setTodo(1)} style={{color:currentTodo == 1 ? "red":"white"}}>Todo#1</button>
                <button onClick={()=>setTodo(2)} style={{color:currentTodo == 2 ? "red":"white"}}>Todo#2</button>
                <button onClick={()=>setTodo(3)} style={{color:currentTodo == 3 ? "red":"white"}}>Todo#3</button>
                <button onClick={()=>setTodo(4)} style={{color:currentTodo == 4 ? "red":"white"}}>Todo#4</button>
            </div>

            <p>{loader ? "Loading...":JSON.stringify(tabData)}</p> 
            {/* this is how we print the whole object as REACT ONLY UNDERSTAND NUMBERS,STRINGS,JSX.SO we need to CONVERT THE JSON OBJECT DATA TO STRINGS */}


            {/* this is how you render SINGLE PROPERTY FROM AN OBJECT */}
            <br />
            {loader ? "Loading...":tabData.title}
            <br />
            {loader ? "Loading...":tabData.id}
            
        </div>
    )
}

export default TodoComponent;