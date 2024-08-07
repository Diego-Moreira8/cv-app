import { useCVState, useCVDispatch } from "../cv-reducer/hook";
import styles from "../styles/TechsList.module.css";

function TechsList() {
  const cvState = useCVState();
  const cvDispatch = useCVDispatch();

  const techItems = cvState.techs.map((t) => (
    <li key={t.id}>
      <button
        type="button"
        onKeyDown={(e) => handleKeyPress(e, t.id)}
        onDoubleClick={() => handleDeleteTech(t.id)}
      >
        {t.name}
      </button>
    </li>
  ));

  function handleKeyPress(e: React.KeyboardEvent, techId: string) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleDeleteTech(techId);
    }
  }

  function handleDeleteTech(id: string) {
    cvDispatch({ type: "REMOVE_TECH_BY_ID", value: id });
  }

  return (
    <div className={styles.techsList}>
      {techItems.length > 0 ? (
        <>
          <p>Para apagar uma tecnologia, basta tocar/clicar duas vezes nela.</p>
          <ul>{techItems}</ul>
        </>
      ) : (
        <p>
          <i>Suas tecnologias serão exibidas aqui.</i>
        </p>
      )}
    </div>
  );
}

export { TechsList };
