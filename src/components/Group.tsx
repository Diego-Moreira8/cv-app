import styles from "../styles/Group.module.css";

type GroupProps = {
  title: string;
  children: React.ReactNode;
};

function Group({ title, children }: GroupProps) {
  return (
    <div className={styles.container}>
      <button className={styles.headerButton} type="button">
        <h2>{title}</h2>
        <span>&#x25b2;</span>
      </button>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export { Group };
