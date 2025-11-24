import {Link} from 'react-router-dom';

function Footer(){
    return (
        <div>
            <p>Footer | Contact </p>
            <Link to={"https://en.wikipedia.org/wiki/Contact_(novel)"} style={{fontSize:"18px",color:"white"}}>Contact Us</Link>
        </div>
    )
}

export default Footer;