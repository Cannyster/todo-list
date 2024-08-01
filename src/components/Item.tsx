import { Trash, Check } from "@phosphor-icons/react";
import styles from "./Item.module.css";
import { Task } from "./TaskManager";

interface Props {
  data: Task;
  removeTask: (id: number) => void;
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void;
}

export function Item({ data, removeTask, toggleTaskStatus }: Props) {
  // verifica se a caixa marcada e verdadeira ou falsa e aplica efeito no check box
  const checkboxCheckedClassname = data.isChecked
    ? styles["checkbox-checked"]
    : styles["checkbox-unchecked"];

  // verifica se a caixa marcada e verdadeira ou falsa e aplica efeito no texto
  const paragraphCheckedClassname = data.isChecked
    ? styles["paragraph-checked"]
    : "";

  function handleDeleteTask() {
    removeTask(data.id);
  }

  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, value: !data.isChecked });
    // invertendo o valor de value com o !data.isChecked
  }

  return (
    <div className={styles.taskBox}>
      <label htmlFor="checkbox" onClick={handleTaskToggle}>
        <input readOnly type="checkbox" checked={data.isChecked} />
        <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
          {data.isChecked && <Check size={12} />}
        </span>
      </label>
      <div className={styles.taskContent}>
        <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
          {data.content}
        </p>
      </div>
      <button onClick={handleDeleteTask} title="Deletar Tarefa">
        <Trash size={14} color="#808080" />
      </button>
    </div>
  );
}
