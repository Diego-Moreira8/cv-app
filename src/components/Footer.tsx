import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <p className={styles.footer}>
      Construído por{" "}
      <a href="https://diegomoreira.vercel.app/" target="_blank">
        Diego Moreira
      </a>{" "}
      em 2024
    </p>
  );
}

export { Footer };
