import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import { TaskManager } from "./components/TaskManager";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.principal}>
        <TaskManager />
      </main>
    </div>
  );
}

export default App;
