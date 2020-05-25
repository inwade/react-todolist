import React from 'react';
import './Adder.css';

class Adder extends React.Component {

    

    handleClick (e) {
    let typedText = document.querySelector('#textArea').value; 
    if (typedText.length !== 0) { 
    e.preventDefault();
    document.querySelector('#textArea').value = ''
    return this.props.updateTasksList(typedText);                       
    } else {
        e.preventDefault()
    }
}

        
 render() {
    
return (
    <div className="jumbotron bg-info text-center text-white">
     <a name="adder"></a>
     <h2 className="display-3">Here you can add your tasks</h2>
      <form className="mt-5 d-flex flex-column align-items-center">
      <textarea className="form-control w-50" rows='5' id='textArea'></textarea>
      <button type="submit" className="btn btn-outline-light font-weight-bold w-25 mt-3" 
       id='addButton' onClick={this.handleClick.bind(this)}>Add</button>
      </form>
   </div>)}
}

export default Adder;