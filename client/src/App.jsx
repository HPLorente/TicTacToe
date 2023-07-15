import styles from "./App.module.css";
import Game from "./pages/Game/Game";
import { MenuHTMLAttributes } from "react";
import Menu from "./pages/Menu/Menu";

function App() {
  return (
    <div className={styles.container}>
      <Menu />
      {/* <Game /> */}
    </div>
  );
}

export default App;
