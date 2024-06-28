import { useEffect } from "react";
import { Header } from "./components/Header";
import { CVForms } from "./components/CVForms";
import { PrintButton } from "./components/PrintButton";
import { Footer } from "./components/Footer";
import { useCVState } from "./cv-reducer/hook";
import styles from "./styles/App.module.css";

function App() {
  const {
    personalData: { name },
  } = useCVState();

  useEffect(() => {
    document.title = `Currículo${name && " - " + name}`;
  }, [name]);

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
      <PrintButton />
      <Footer />
    </div>
  );
}

export { App };
