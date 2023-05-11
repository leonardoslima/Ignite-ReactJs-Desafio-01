import { Task } from './Task';

import styles from './Tasks.module.css'

import { Clipboard } from "@phosphor-icons/react";

interface Task {
  id: string;
  checked: boolean;
  content: string;
}

interface TasksProps {
  tasks: Task[],
  checkedTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function Tasks({ tasks, checkedTask, deleteTask }: TasksProps) {
  const createdTask = tasks.length

  const tasksCompleted = tasks.reduce((acc, task) => {
    if (task.checked) {
      return acc + 1
    }
    return acc;
  }, 0);

  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <div className={styles.created}>
          <strong>Tarefas Criadas</strong>
          <span>{createdTask}</span>
        </div>
        <div className={styles.done}>
          <strong>Concluídas</strong>
          <span>{tasksCompleted} de {createdTask}</span>
        </div>
      </div>

      {createdTask ?
        tasks.map((task) => {
          return (
            <Task key={task.id} task={task} checkedTask={checkedTask} deleteTask={deleteTask} />
          )
        })
        :
        <div className={styles.empty}>
          <Clipboard size={56} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      }
    </div>
  )
}