import React from 'react'
import './TaskList.css';


class TaskList extends React.Component {
    handleCloser(event) {
        let liForDelete = event.target.closest('li');
        liForDelete.remove();
        console.log(liForDelete);
    }
    handleDouble (event) {
        event.target.closest('p').style.textDecoration === 'line-through' ? event.target.closest('p').style.textDecoration = 'none' : event.target.closest('p').style.textDecoration = 'line-through';
    }
    
render () {
    let elements = this.props.task;    
        return (
<div className="list-items">
    <a name="list"></a>
    <h2>Your current tasks:</h2>
    <ul className="d-flex flex-column align-items-center">
        {elements.map( (value, index) => {
        return <li key={index} className="py-3 px-3 mb-2 font-weight-bold" onDoubleClick={this.handleDouble}> 
            <p>{value}</p>
            <span className="close-button" onClick={this.handleCloser}>X</span>
        </li> 
            } )}
    </ul>
</div>)
    }
}

export default TaskList