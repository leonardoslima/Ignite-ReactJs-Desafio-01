import { Circle, CheckCircle, Trash } from "@phosphor-icons/react";

import styles from './Task.module.css'

interface Task {
  id: string;
  content: string;
}

interface TaskProps {
  task: Task,
  deleteTask: (id: string) => void;
}

export function Task({ task, deleteTask }: TaskProps) {
  function handleDeleteTask() {
    deleteTask(task.id)
  }

  return (
    <div className={styles.task}>
      <button className={styles.radio_unchecked}>
        <Circle size={24} />
      </button>

      <p>{task.content}</p>

      <button
        className={styles.trash}
        onClick={handleDeleteTask}
      >
        <Trash size={24} />
      </button>
    </div>
  )
}