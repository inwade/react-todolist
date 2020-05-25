import React from 'react';
import './Intro.css';

class Intro extends React.Component {
    render () {
return (
    <div className="intro-box container-fluid d-flex flex-column align-items-center justify-content-center">
        <h1>Welcome to the To Do List</h1>
        <p>Created by Alex 3sp on React</p>
        <div className="mt-5">
            <svg className="bi bi-arrow-down" width="3rem" height="3rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.646 9.646a.5.5 0 01.708 0L8 12.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z" clipRule="evenodd"/>
            <path fillRule="evenodd" d="M8 2.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V3a.5.5 0 01.5-.5z" clipRule="evenodd"/>
        </svg>
        </div> 
    </div>
        )
    }
}


export default Intro;