import {Outlet} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'

function Layout(){
    return (
        <div style={{backgroundColor:"crimson"}}>
            {/* header component  */}
            <Header /> 
            {/* Outlet renders the matching child route of a parent route or nothing if no child route matches.matlab agar humne ek route define kiya usme uske child routes aagye toh unn sabko outlet show karega.
            <Outlet /> is a placeholder inside the Layout where the child route content will be displayed.
            */}
            <Outlet />
            <Footer />
        </div>
    )
   

    // LAYOUT Component does nothing but it wraps all the component inside it and decided a structure of the app in what way components will be shown.
    // now here we have all the links for navigation.

    // Here we have defined a structure of our app in which it will render components.
    /*
    
    
    
    */
}

export default Layout;