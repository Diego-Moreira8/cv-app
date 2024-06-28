import { ExpGroupActions } from "./ExpGroup";
import { ExpPeriod } from "./ExpPeriod";
import { ExpType } from "../cv-reducer/types";
import { useCVDispatch, useCVState } from "../cv-reducer/hook";
import { useConfirmation } from "../hooks/useConfirmation";
import styles from "../styles/ExpList.module.css";

type ExpListProps = {
  expType: ExpType;
  expGroupDispatch: React.Dispatch<ExpGroupActions>;
};

function ExpList({ expType, expGroupDispatch }: ExpListProps) {
  const cvState = useCVState();
  const cvDispatch = useCVDispatch();
  const { ConfirmationModal, confirmAction } = useConfirmation();

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

  async function handleDelete(id: string) {
    const confirmed = await confirmAction(
      "Tem certeza que deseja apagar esta experiência?"
    );

    if (confirmed) {
      cvDispatch({ type: "REMOVE_EXPERIENCE", expType: expType, value: id });
    }
  }

  return (
    <div className={styles.expList}>
      {ConfirmationModal()}

      <button className="ok" type="button" onClick={handleAdd}>
        Adicionar
      </button>

      {experiences.length === 0 && (
        <p className={styles.emptyList}>
          <i>Suas experiências aparecerão aqui</i>
        </p>
      )}

      {experiences.length > 0 && (
        <>
          <hr />

          <p>
            <i>
              Lista de experiências classificadas por data de início, da mais
              recente para a mais antiga.
            </i>
          </p>
        </>
      )}

      <ul>
        {experiences.map((exp) => (
          <li key={exp.id}>
            <hr />

            <h3>{exp.title}</h3>

            <p>{exp.location}</p>

            <p>
              <ExpPeriod exp={exp} />
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
