import {Link} from 'react-router-dom';


function Header(){
    return (
        <div>
            <p style={{fontSize:"2vw"}}>Hello students!</p>
            <Link to={"/"} style={{color:"yellow",fontSize:"30px"}}>ALLEN</Link>|
            <Link to={"/neet/online-coaching-class-11"} style={{color:"yellow",fontSize:"30px"}}>Class 11</Link>|
            <Link to={"/neet/online-coaching-class-12"} style={{color:"yellow",fontSize:"30px"}}>Class 12</Link>| 
        </div>
    )
    
}

export default Header;