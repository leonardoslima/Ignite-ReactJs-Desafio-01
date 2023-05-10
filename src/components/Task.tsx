import { Circle, CheckCircle, Trash } from "@phosphor-icons/react";

import styles from './Task.module.css'

export function Task(props: any) {
  return (
    <div className={styles.task}>
      <button className={styles.radio_unchecked}>
        <Circle size={24} />
      </button>

      <p>{props.text}</p>

      <button className={styles.trash}>
        <Trash size={24} />
      </button>
    </div>
  )
}