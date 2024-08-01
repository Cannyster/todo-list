import styles from "./Header.module.css";
import rocket from "../assets/rocket.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocket} alt="Logotipo do Todo List" />
      <strong className={styles.to}>to</strong>
      <strong className={styles.do}>do</strong>
    </header>
  );
}
