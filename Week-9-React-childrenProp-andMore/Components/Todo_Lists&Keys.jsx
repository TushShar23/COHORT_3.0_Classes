import React from 'react';


// Here we are gonna learn about lists and keys

function Todo_Keys({title,done}){
    return(
        <div style={{backgroundColor:"blue",color:"white",padding:"1rem"}}>
            {title} - {done?"Done!":"Not Done!"}
        </div>
    )
}

export default Todo_Keys;