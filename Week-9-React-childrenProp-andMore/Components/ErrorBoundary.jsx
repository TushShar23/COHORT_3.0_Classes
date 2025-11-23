import React from 'react';

class ErrorBoundary extends React.Component{
  constructor(props){
    super(props)
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error){
    return {hasError: true}
  }

  componentDidCatch(error,info){
    console.error("Error caught:",error,info);
  }
  
  render(){
    if(this.state.hasError){
      return(
        <div style={{backgroundColor:"red",padding:"10px",color:"white"}}>
          <h1>Something Went WRONG.</h1>
        </div>
      );
    }
    else{
      return this.props.children;
    }
  }
}


export default ErrorBoundary;