import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
render () {
    return (
        <div className="navigation-box navbar navbar-expand-md navbar-light bg-light d-flex justify-content-center">
            <ul className="navbar-nav text-center font-weight-bold">
                <li className="nav-item mx-3">
                   <a href="#adder">Add item to the list</a>
                </li>
                <li className="nav-item mx-3">
                   <a href="#list"> Look at your current 'Todos' </a>
                </li>
        </ul>
    </div>
    )
}
}

export default Navbar;