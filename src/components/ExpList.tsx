import { CVData, CVAction, ExpType } from "../useCVReducer";
import months from "../utils/monthsArray";
import { ExpGroupActions } from "./ExpGroup";

type ExpListProps = {
  expType: ExpType;
  cvState: CVData;
  cvDispatch: React.Dispatch<CVAction>;
  expGroupDispatch: React.Dispatch<ExpGroupActions>;
};

export default function ExpList({
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
    <div>
      <button type="button" onClick={handleAdd}>
        Adicionar experiência
      </button>

      <ul>
        {experiences.map((exp) => (
          <li key={exp.id}>
            <p>
              <strong>{exp.title}</strong>
            </p>

            <p>{exp.location}</p>

            <p>
              de {months[exp.startMonth]}/{exp.startYear} até{" "}
              {months[exp.endMonth]}/{exp.endYear}
            </p>

            <p>{exp.description}</p>

            <div>
              <button type="button" onClick={() => handleEdit(exp.id)}>
                Editar
              </button>
              <button type="button" onClick={() => handleDelete(exp.id)}>
                Apagar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
