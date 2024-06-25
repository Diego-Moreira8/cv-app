import { useCVState } from "../cv-reducer/hook";
import styles from "../styles/CVPreview.module.css";

function CVPreview() {
  const cvState = useCVState();

  return (
    <div className={styles.container} id="printable">
      <h1 className={styles.printable}> {cvState.personalData.name}</h1>
    </div>
  );
}

export { CVPreview };
