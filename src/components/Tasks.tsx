import styles from './Tasks.module.css'
import { Clipboard } from "@phosphor-icons/react";

export function Tasks() {
  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <div className={styles.created}>
          <strong>Tarefas Criadas</strong>
          <span>0</span>
        </div>
        <div className={styles.done}>
          <strong>Concluídas</strong>
          <span>2 de 10</span>
        </div>
      </div>

      <div className={styles.empty}>
        <Clipboard size={56} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}