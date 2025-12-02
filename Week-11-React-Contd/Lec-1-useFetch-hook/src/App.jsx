import { useState } from 'react'
import './App.css'
import useFetch from '../Hooks/useFetch'

function App() {
  // what we are doing here is that we have created a "currentpost" state variable whenever it is changed "setCurrentPost" is called.How it gets changed ? So on buttons we are calling "setCurrentPost" to set the "post number like 1,2,3..." and currentPost variable gets updated every time and everytime currentPost changes our useFetch will fetch the data for that particular url and "post" variable gets updated and in last we are rendering the post object using JSON.stringify().

  // Every time "CurrentPost "changes it re renders the component.NOW OUR CURRENTPOST IS CHANGED TO 2 SO APP() WILL RE RENDERS.NOW APP() IS RE RENDERS currentPost = 2 , useFetch WILL USE 2 AS ITS ARGUMENT AND THEN THE DATA WILL BE FETCHED FOR THAT PARTICULAR POST

  // EVERY TIME WE CLICK A BUTTON ---> BUTTON CALLS THE "updator function of currentPost" AND EVERY TIME "currentPost" IS CHANGED APP() COMPONENT WILL BE RE RENDER AND AGAIN useFetch WILL FETCH THE DATA FOR THAT POST NUMBER.
   
  const [currentPost,setCurrentPost] = useState(1);
  const {post,loading} = useFetch('http://jsonplaceholder.typicode.com/posts/'+currentPost);
  
  if(loading){
    return(
      <div>
        Loading....
      </div>
    )
  }
  else{
    return (
      <div>
        <button onClick={()=>setCurrentPost(1)}>Post-1</button>
        <button onClick={()=>setCurrentPost(2)}>Post-2</button>
        <button onClick={()=>setCurrentPost(3)}>Post-3</button>
        <button onClick={()=>setCurrentPost(4)}>Post-4</button>
        <button onClick={()=>setCurrentPost(5)}>Post-5</button>
        <br />
        <br />
        {JSON.stringify(post)}
        <br />
        <br />
        {post.title}
      </div>
    )
  }
}

export default App
