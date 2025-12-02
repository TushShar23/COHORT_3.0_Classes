import { useState , useEffect, use } from "react";

// we need to design a hook which takes "generic url" and changes the data "whenever url changes".It should accept url(Basic structure of this hook is like "usePost" hook)

function useFetch(url){
    const [post,setPost] = useState({});
    const [loading,setLoading] = useState(false);

    async function getpostData() {
        setLoading(true);
        fetch(url)
        .then((res)=>{
            return res.json();
            // json() is also an async function so it returns a promise and that promise will be handled by following .then()
        })
        .then((data)=>{
            setPost(data)
        })
        .catch(err => console.error(err));

        setLoading(false);
    }

    useEffect(()=>{
        getpostData(); // this will put and update the "post" variable
    },[url]);
    // this useEffect hook will run every time when "url" changes.Fetching data is a side effect thingy so for handling that we are using "useEffect";

    return {post , loading}

}

export default useFetch;

