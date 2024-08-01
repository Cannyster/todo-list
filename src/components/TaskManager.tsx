import styles from "./TaskManager.module.css";
import { Task } from "./Task";
import { Empty } from "./Empty";
import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";
import { useRef } from "react";

export function TaskManager() {
  const [tasks, setTasks] = useState([]); // iniciando o estado de tarefas, com 1 tarefa
  const [newTaskText, setNewTaskText] = useState(""); // estado de texto de tarefas
  const [taskCount, setTaskCount] = useState(0); // contador para o total de tarefas
  const [taskCompleteCount, setTaskCompleteCount] = useState(0); // contador para o total de tarefas concluídas
  const [isCompleteTask, setIsCompleteTask] = useState<boolean>(false); // estado de conslusão das tasks

  const isTaskTextEmpty = newTaskText.length == 0; // verificador de texto de novas tasks

  const buttonRef = useRef(null);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault;
    setTasks([...tasks, newTaskText]); //chamando a função que atualiza o estado newTaskText
    setNewTaskText(""); // voltando o valor do setNewTaskText para o padrão, string vazia
    setTaskCount(taskCount + 1); // adicionando uma tarefa a lista de tarefas existentes
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task != taskToDelete;
    });

    setTasks(tasksWithoutDeletedOne);
    setTaskCount(taskCount - 1);

    if (isCompleteTask) {
      setTaskCompleteCount(taskCompleteCount - 1);
    }
  }

  function toggleTaskStatus() {
    setIsCompleteTask(true);
    setTaskCompleteCount(taskCompleteCount + 1);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleCreateNewTask(event);
    }
  };

  return (
    <div>
      <div className={styles.janela}>
        <form className={styles.commentForm} onKeyDown={handleKeyDown}>
          <textarea
            name="task"
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskChange} // permite realizar alteraçãoes e vai alterando o estado do texto
            required={true}
            value={newTaskText}
          >
            {" "}
          </textarea>
          <button
            className={styles.createButton}
            type="submit"
            disabled={isTaskTextEmpty}
            onClick={handleCreateNewTask}
            ref={buttonRef}
          >
            <span>Criar</span>
            <PlusCircle />
          </button>
        </form>
      </div>
      <div className={styles.taskManagerBody}>
        <header className={styles.taskManagerHeader}>
          <div className={styles.taskCounter}>
            <strong className={styles.text1}>Tarefas Criadas</strong>
            <span>{taskCount}</span>
          </div>
          <div className={styles.taskCounter}>
            <strong className={styles.text2}>Concluídas</strong>
            <span>
              {" "}
              {tasks.length > 0 ? taskCompleteCount + " de " + taskCount : 0}
            </span>
          </div>
        </header>

        {tasks.length > 0 ? (
          tasks.map((task) => {
            return (
              <Task
                key={task}
                content={task}
                onDeleteTask={deleteTask}
                onToggleTaskStatus={toggleTaskStatus}
              />
            );
          })
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}
