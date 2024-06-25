import { useEffect } from "react";
import { Header } from "./components/Header";
import { CVForms } from "./components/CVForms";
import { Footer } from "./components/Footer";
import styles from "./styles/App.module.css";

function App() {
  useEffect(() => {
    // Prevents the document to be cropped when printing
    const handleBeforePrint = () => window.scrollTo({ top: 0 });
    window.addEventListener("beforeprint", handleBeforePrint);
    return () => window.removeEventListener("beforeprint", handleBeforePrint);
  }, []);

  return (
    <div className={styles.app} id="app">
      <Header />
      <CVForms />
      <Footer />
    </div>
  );
}

export { App };
