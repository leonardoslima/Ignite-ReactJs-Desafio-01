import { useState } from 'react';
import { PlusCircle } from "@phosphor-icons/react";
import styles from "./NewTask.module.css";

interface NewTaskProps {
  handleCreateNewTask: (text: string) => void;
}

export function NewTask({ handleCreateNewTask }: NewTaskProps) {

  const [task, setTask] = useState('');

  function createTask() {
    handleCreateNewTask(task)
    setTask('')
  }

  return (
    <div>
      <div className={styles.taskForm} >
        <input
          placeholder="Adicione uma nova tarefa"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <button
          onClick={createTask}
        >
          Criar
          <PlusCircle />
        </button>
      </div>
    </div>
  )
}