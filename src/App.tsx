import { useState } from "react";

import { NewTask } from "./components/NewTask";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

import styles from "./App.module.css";

import './global.css';

interface Task {
  id: string;
  texto: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  function handleCreateNewTask(texto: string) {
    const newTask = {
      id: Date.now().toString(),
      texto
    }

    console.log(newTask)
    setTasks((state) => [...state, newTask]);
  }


  return (
    <div>
      <Header />
      <main className={styles.container}>
        <NewTask handleCreateNewTask={handleCreateNewTask} />
        <Tasks tasks={tasks} />
      </main>
    </div>
  )
}

export default App
