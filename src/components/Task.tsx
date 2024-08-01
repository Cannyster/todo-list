import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
  content: string;
  onDeleteTask: (task: string) => void;
  onToggleTaskStatus: () => void;
}

export function Task({ content, onDeleteTask, onToggleTaskStatus }: TaskProps) {
  function handleDeleteTask() {
    if (onDeleteTask) {
      onDeleteTask(content);
    }
  }

  function handleToggleTaskStatus() {
    if (onToggleTaskStatus) {
      onToggleTaskStatus();
    }
  }

  return (
    <div className={styles.taskBox}>
      <label className={styles["custom-checkbox"]}>
        <input
          type="checkbox"
          name="taskStatus"
          onChange={handleToggleTaskStatus}
        />
        <span className={styles.checkmark}></span>
      </label>
      <div className={styles.taskContent}>
        <p>{content}</p>
      </div>
      <button onClick={handleDeleteTask} title="Deletar_Tarefa">
        <Trash size={14} color="#808080"></Trash>
      </button>
    </div>
  );
}
