import styles from "./App.module.css";
import Game from "./pages/Game/Game";
import Menu from "./pages/Menu/Menu";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/game" element={<Game />}></Route>
      </Routes>
    </div>
  );
}

export default App;
