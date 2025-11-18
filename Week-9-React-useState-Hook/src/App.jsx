import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from '../components/Counter.jsx'
import Notification from '../components/Notification.jsx'
import PostComponent from '../components/Post.jsx'


function App() {

  const [posts,setPosts] = useState([]);// we gave empty array to usestate as first we are showing nothing.Means POSTS variable has NOTHING TO SHOW.THEN WE WILL UPDATE IT WITH POSTCOMPONENT WHICH WILL BE OBJECT.SO BASICALLY POSTS IS AN ARRAY OF OBJECTS(POSTCOMPONENTS).
  
  // posts is a STATE VARIABLE which is an EMPTY ARRAY.

  // posts = []
  // posts = [<postcomponent name="" username="" subtitle="" imageSrc="" description=""></postcomponent>]
  /*
  posts = [<postcomponent name="" username="" subtitle="" imageSrc="" description=""></postcomponent>,
    [<postcomponent name="" username="" subtitle="" imageSrc="" description=""></postcomponent>
  ]
  posts = [<postcomponent name="" username="" subtitle="" imageSrc="" description=""></postcomponent>,
    [<postcomponent name="" username="" subtitle="" imageSrc="" description=""></postcomponent>,
    [<postcomponent name="" username="" subtitle="" imageSrc="" description=""></postcomponent>
  ]
  
  and so on....

  */

  // idea is we have to iterate over multiple post component with the data send into it


  const postcomponents = posts.map(post=> <PostComponent 
    name={post.name}
    imageSrc={post.imageSrc}
    username={post.username}
    subtitle={post.subtitle}
    description={post.description}
    />



  // NOW HERE COMES THE CORE OF JS WE STUDIED ABOUT IMPLICIT AND EXPLICIT RETURN IN ARROW FUNCTIONS.THERE MAIN USE IS HERE.WE USE IMPLICIT RETURN HERE AND FOR THAT WE NEED TO REMOVE THE CURLY BRACES and if we want to use EXPLICIT WE NEED TO PUT RETURN STATEMENT.
  )
  // as posts is an EMPTY ARRAY SO WE CAN USE ARRAY METHODS ON IT
  // Now we only need to render "postcomponents" only coz IT CONTAINS THE ARRAY OF POSTCOMPONENT 

  function AddPost(){
    setPosts([...posts,{
      name:"Aditya",
      imageSrc:'https://pbs.twimg.com/profile_images/1978439421344329728/rKJK-AJZ_400x400.jpg',
      username:"@Aditya_Ships",
      subtitle:"10k followers",
      description:"CS Engineer"
    }])

    // we have used spread operator so that our previous components will not lost and new data will get added.

    // At first there is no such card.And on clicking the button function AddPost() executes and then inside the function setPosts() will put the data in the postComponent and renders it on the screen.

    // setPosts → a special React function that updates that internal variable and re-renders the component


    /*
    
    
      setPosts() triggers this cycle

      setPosts()  
          ↓
      React updates state  
          ↓
      React re-renders component  
          ↓
      postcomponents re-calculated  
          ↓
      New JSX generated  
          ↓
      React updates DOM efficiently  
  
      */


      // React internally maintain a "STATE MEMORY"



      //setPosts() does 3 things:
      // 1. Updates React’s internal state memory
      // 2. Re-renders the component
      // 3. Patches the DOM using Virtual DOM diffing




//       React re-runs your component function (App())

          // This is the MOST IMPORTANT point.

          // After setPosts():
          // React runs your component again

          // It recalculates:

          // variables

          // JSX

          // postcomponents = posts.map(...)

          // etc.

          // This is called re-rendering.

  }

  return (
    <>
      <Counter></Counter>
      <Counter innerText="Increment"></Counter>
      <Counter innerText="Increase value"></Counter>
      <Counter innerText="+"></Counter>

      <Notification></Notification>

      <button onClick={AddPost} style={{marginTop:"1rem"}}>Add Post</button>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"1rem",width:"fit-content",flexWrap:"wrap"}}>
        {postcomponents}
      </div>

      {/* here we have made a function for adding post which is updating the posts array using setPost()
        we are sending some info in an object and in postcomponents where we are iterating posts.It takes info from that object and put the into the PostComponent.WE DO NOT NEED TO WRITE THAT COMPONENT AGAIN AND AGAIN WITH DIFFERENT VALUES.
      */}

    </>
  )
}

export default App
