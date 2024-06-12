import styles from "../styles/Group.module.css";

type GroupProps = {
  title: string;
  children: React.ReactNode;
};

export default function Group({ title, children }: GroupProps) {
  return (
    <div className={styles.container}>
      <button className={styles.headerButton} type="button">
        <h2>{title}</h2>
      </button>
      <div>{children}</div>
    </div>
  );
}
