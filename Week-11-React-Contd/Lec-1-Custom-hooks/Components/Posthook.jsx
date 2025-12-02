import { useState,useEffect } from "react";

function usePost(){
    const [post,setpost] = useState({});

    function getpost(){
        const response = fetch('http://jsonplaceholder.typicode.com/posts/1');
        response
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setpost(data);
        })
        .catch(err => console.error(err))// implicit return functions
    }

    useEffect(()=>{
        getpost();
    },[]) 
    // this useEffect will run only once when our component get MOUNTED.

    // we CANNOT DEFINE "ASYNC" function inside "useEffect()" hook

    return post;
}


// we can here also create a "loading component" which renders a text only in the mean time when data is fetching.

export default usePost;