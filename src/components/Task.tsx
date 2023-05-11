import { Circle, CheckCircle, Trash } from "@phosphor-icons/react";

import styles from './Task.module.css'

interface Task {
  id: string;
  checked: boolean;
  content: string;
}

interface TaskProps {
  task: Task,
  checkedTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function Task({ task, checkedTask, deleteTask }: TaskProps) {
  function handleDeleteTask() {
    deleteTask(task.id)
  }

  function handleCheckTask() {
    checkedTask(task.id)
  }

  return (
    <div className={styles.task}>
      <button
        onClick={handleCheckTask}
        className={`${task.checked ? styles.radio_checked : styles.radio_unchecked}`}
      >
        {task.checked ? <CheckCircle size={24} /> : <Circle size={24} />}
      </button>

      <p className={`${task.checked ? styles.text_checked : styles.text_unchecked}`}>
        {task.content}
      </p>

      <button
        className={styles.trash}
        onClick={handleDeleteTask}
      >
        <Trash size={24} />
      </button>
    </div >
  )
}