import React from 'react';

// Here we are making components using classes not functions.There is no CONCEPT OF HOOKS IN CLASS BASED COMPONENTS.

/*

Before React Hooks (introduced in 2019), class components were the only way to:

Use state

Use lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount)

Handle side effects

Use this.setState()

> class based components are still important from the INTERVIEW PERSPECTIVE AND ALSO FEW BIG COMPANIES STILL USE THESE CLASS BASED COMPONENTS IN THEIR CODE.

> THEY ARE HELPFUL IN UNDERSTANDING THE LIFECYCLE EVENTS FOR UNDERSTANDING REACT HOOKS.
( componentDidMount,componentDidUpdate(update dependencies), componentWillUnmount)
        =                   =                                       =
    useEffect(()=>{             useEffect(()=>{               useEffect(()=>{
                                                                
                                                                component unmounting code
                                                            })
                               },[dependencies array])
component mounting code
})



***** THE ONLY SCENARIO WHERE YOU NEED TO WRITE THE CLASS BASED COMPONENT IS "Error Boundary" ******
*/

class ClassBasedCounter extends React.Component{
    state = {count:0}

    increment = ()=>{
        this.setState({count:this.state.count + 1});
        // this is an update function like we get one when we use useState()
    }

    render(){
        return (
            <div>
                <p>Count : {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

export default ClassBasedCounter;