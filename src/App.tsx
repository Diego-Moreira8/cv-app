import { Header } from "./components/Header";
import { CVForms } from "./components/CVForms";
import { Footer } from "./components/Footer";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.app} id="app">
      <Header />
      <CVForms />
      <Footer />
    </div>
  );
}

export { App };
