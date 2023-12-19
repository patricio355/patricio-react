import React from "react";
import './Header.css'
function Header(){

    return(
        <div>
 <nav className="navbar">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <div className="navbar-icons">
                    <a href="#"><i className="icon bi bi-house-door"></i></a>
                    <a href="#"><i className="icon bi bi-envelope"></i></a>
                    <a href="#"><i className="icon bi bi-bell"></i></a>
                </div>
            </div>
        </nav>

</div>
    )
}

export default Header;