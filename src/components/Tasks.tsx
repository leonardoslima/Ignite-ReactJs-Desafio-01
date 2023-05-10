import { Task } from './Task';

import styles from './Tasks.module.css'

import { Clipboard } from "@phosphor-icons/react";

interface Task {
  id: string;
  texto: string;
}

interface TasksProps {
  tasks: Task[],
}

export function Tasks({ tasks }: TasksProps) {
  const createdTask = tasks.length

  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <div className={styles.created}>
          <strong>Tarefas Criadas</strong>
          <span>{createdTask}</span>
        </div>
        <div className={styles.done}>
          <strong>Concluídas</strong>
          <span>0 de {createdTask}</span>
        </div>
      </div>

      {createdTask ?
        tasks.map((task) => {
          return (
            <Task text={task.texto} />
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