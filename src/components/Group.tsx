import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useActiveGroup, useSetActiveGroup } from "../hooks/useActiveGroup";
import styles from "../styles/Group.module.css";

type GroupProps = {
  title: string;
  children: React.ReactNode;
};

function Group({ title, children }: GroupProps) {
  const [id, setId] = useState("");
  useEffect(() => setId(uuid()), []);

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
