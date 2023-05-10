import { NewTask } from "./components/NewTask";
import { Header } from "./components/Header";

import './global.css';

import styles from "./App.module.css";
import { Tasks } from "./components/Tasks";

function App() {

  return (
    <div>
      <Header />
      <main className={styles.container}>
        <NewTask />
        <Tasks />
      </main>
    </div>

  )
}

export default App
