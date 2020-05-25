import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Adder from './components/Adder/Adder'
import TaskList from './components/TaskList/TaskList';

import './App.css';

let allTasks = [];
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      task:[]
     }
    this.updateTasksList = this.updateTasksList.bind(this)
  }



  updateTasksList (newTask) {
    allTasks.push(newTask)
    this.setState({
      task: allTasks
    });
    
  }
  
  render () {   
    
    return (
    <div className="container-fluid wrapper">
      <Navbar />
      <Intro />
      <Adder updateTasksList={this.updateTasksList}/>
      <TaskList task={this.state.task}/>
    </div>
  )}
}

export default App;
