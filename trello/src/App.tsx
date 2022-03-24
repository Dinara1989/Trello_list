import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./components/Todolist";

export type FilterValuesType = "all" | "completed" | "active";
function App() {

    let initTasks: Array<TaskType> = [
        { id: 1, title: "CSS", isDone: true},
        { id: 2, title: "HTML", isDone:  true},
        { id: 3, title: "JS", isDone:  false},
        { id: 4, title: "Redux", isDone: false},
        { id: 5, title: "React", isDone: true}
    ]

    let [tasks, setTasks] = useState(initTasks);
    let [filter, setFilter] = useState("all");

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks);
    }

    let tasksForTodolist = tasks;
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }
    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
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
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
      />
      {/*<Todolist title={"Movies"} tasks={tasks2}/>*/}
    </div>
  );
}

export default App;
