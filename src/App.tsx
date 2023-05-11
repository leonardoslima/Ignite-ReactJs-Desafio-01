import { useState } from "react";

import { NewTask } from "./components/NewTask";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

import styles from "./App.module.css";

import './global.css';

interface Task {
  id: string;
  content: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  function handleCreateNewTask(content: string) {
    const newTask = {
      id: Date.now().toString(),
      content
    }
    setTasks((state) => [...state, newTask]);
  }

  function deleteTask(id: string) {
    const taskWithoutDeleOne = tasks.filter(task => {
      return task.id !== id
    })

    setTasks(taskWithoutDeleOne)
  }

  return (
    <div>
      <Header />
      <main className={styles.container}>
        <NewTask handleCreateNewTask={handleCreateNewTask} />
        <Tasks tasks={tasks} deleteTask={deleteTask} />
      </main>
    </div>
  )
}

export default App
