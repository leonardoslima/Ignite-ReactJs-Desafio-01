import { PlusCircle } from "@phosphor-icons/react";
import styles from "./NewTask.module.css";

export function NewTask() {
  return (
    <div>
      <form className={styles.taskForm} action="">
        <input placeholder="Adicione uma nova tarefa" type="text" />
        <button >Criar <PlusCircle /></button>
      </form>
    </div>
  )
}