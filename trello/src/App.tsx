import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./components/Todolist";
import {v1} from "uuid";

export type FilterValuesType = "all" | "completed" | "active";
function App() {

    let [tasks, setTasks] = useState([
        { id: v1(), title: "CSS", isDone: true},
        { id: v1(), title: "HTML", isDone:  true},
        { id: v1(), title: "JS", isDone:  false},
        { id: v1(), title: "Redux", isDone: false},
        { id: v1(), title: "React", isDone: true}
    ]);

    function addTask(title: string) {
        let newTask = {
            id: v1(),
            title: title,
            isDone: false
        };
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks);
    }
    let [filter, setFilter] = useState("all");

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks);
    }

    function changeStatus(taskId: string, isDone: boolean) {
        let task = tasks.find( t =>  t.id === taskId );
        if(task) {
            task.isDone = isDone;
        }
        setTasks([...tasks]);
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
                addTask={addTask}
                changeTaskStatus={changeStatus}
                filter={filter}
      />
      {/*<Todolist title={"Movies"} tasks={tasks2}/>*/}
    </div>
  );
}

export default App;
