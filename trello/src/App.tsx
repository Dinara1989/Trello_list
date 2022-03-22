import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./components/Todolist";

function App() {

    let tasks1: Array<TaskType> = [
        { id: 1, title: "CSS", isDone: true},
        { id: 2, title: "HTML", isDone:  true},
        { id: 3, title: "JS", isDone:  true},
        { id: 4, title: "Redux", isDone: false},
        { id: 5, title: "React", isDone: false}
    ]

    let tasks2: Array<TaskType> = [
        { id: 1, title: "Terminator", isDone:  true},
        { id: 2, title: "XXX", isDone:  true},
        { id: 3, title: "Gentelmens", isDone:  true},
        { id: 4, title: "Matrix", isDone: false},
        { id: 5, title: "Love", isDone: false}
    ]

  return (
    <div className="App">
      <Todolist title={"Want to learn"} tasks={tasks1}/>
      <Todolist title={"Movies"} tasks={tasks2}/>
    </div>
  );
}

export default App;
