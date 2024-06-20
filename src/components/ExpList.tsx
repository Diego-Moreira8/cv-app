import { CVData, CVAction, ExpType } from "../useCVReducer";
import { months } from "../utils/monthsArray";
import { ExpGroupActions } from "./ExpGroup";
import styles from "../styles/ExpList.module.css";

type ExpListProps = {
  expType: ExpType;
  cvState: CVData;
  cvDispatch: React.Dispatch<CVAction>;
  expGroupDispatch: React.Dispatch<ExpGroupActions>;
};

function ExpList({
  expType,
  cvState,
  cvDispatch,
  expGroupDispatch,
}: ExpListProps) {
  const experiences =
    expType === ExpType.Academic
      ? cvState.academicExps
      : cvState.professionalExps;

  function handleAdd() {
    expGroupDispatch({ type: "CREATE_EXP" });
  }

  function handleEdit(id: string) {
    expGroupDispatch({ type: "EDIT_EXP_BY_ID", value: id });
  }

  function handleDelete(id: string) {
    cvDispatch({ type: "REMOVE_EXPERIENCE", expType: expType, value: id });
  }

  return (
    <div className={styles.expList}>
      <button className="ok" type="button" onClick={handleAdd}>
        Adicionar
      </button>

      {experiences.length === 0 && (
        <p className={styles.emptyList}>
          <i>Suas experiências aparecerão aqui</i>
        </p>
      )}

      <ul>
        {experiences.map((exp) => (
          <li key={exp.id}>
            <hr />

            <h3>{exp.title}</h3>

            <p>{exp.location}</p>

            <p>
              De {months[exp.startMonth - 1].toLowerCase()}/{exp.startYear} até{" "}
              {months[exp.endMonth - 1].toLowerCase()}/{exp.endYear}
            </p>

            <p>{exp.description}</p>

            <div className={styles.buttons}>
              <button type="button" onClick={() => handleEdit(exp.id)}>
                Editar
              </button>
              <button
                className="danger"
                type="button"
                onClick={() => handleDelete(exp.id)}
              >
                Apagar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { ExpList };
