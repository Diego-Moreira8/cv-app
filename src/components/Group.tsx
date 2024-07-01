import { useActiveGroup, useSetActiveGroup } from "../hooks/useActiveGroup";
import styles from "../styles/Group.module.css";

type GroupProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

function Group({ id, title, children }: GroupProps) {
  const activeGroupId = useActiveGroup();
  const setActiveGroup = useSetActiveGroup();

  const isActive = activeGroupId === id;

  const headerBtnStyle = isActive
    ? styles.headerButtonActive
    : styles.headerButton;

  function handleHeaderClick() {
    if (!isActive) location.href = "#" + id;
    setActiveGroup(isActive ? null : id);
  }

  return (
    <div className={styles.container} id={id}>
      <button
        className={headerBtnStyle}
        type="button"
        onClick={handleHeaderClick}
      >
        <h2>{title}</h2>
        <span className={isActive ? styles.indicatorActive : ""}>&#9660;</span>
      </button>
      {isActive && <div className={styles.content}>{children}</div>}
    </div>
  );
}

export { Group };
