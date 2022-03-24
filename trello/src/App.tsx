import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./components/Todolist";

function App() {

    let tasks: Array<TaskType> = [
        { id: 1, title: "CSS", isDone: true},
        { id: 2, title: "HTML", isDone:  true},
        { id: 3, title: "JS", isDone:  false},
        { id: 4, title: "Redux", isDone: false},
        { id: 5, title: "React", isDone: true}
    ]

    function removeTask(id: number) {
        let resultTask = tasks.filter(t => t.id !== id)
    }

    // let tasks2: Array<TaskType> = [
    //     { id: 1, title: "Terminator", isDone:  true},
    //     { id: 2, title: "XXX", isDone:  true},
    //     { id: 3, title: "Gentelmens", isDone:  true},
    //     { id: 4, title: "Matrix", isDone: false},
    //     { id: 5, title: "Love", isDone: true}
    // ]

  return (
    <div className="App">
      <Todolist title={"Want to learn"}
                tasks={tasks}
                removeTask={removeTask}
      />
      {/*<Todolist title={"Movies"} tasks={tasks2}/>*/}
    </div>
  );
}

export default App;
