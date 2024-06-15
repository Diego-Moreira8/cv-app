import { CVData, CVAction } from "../useCVReducer";
import months from "../utils/monthsArray";
import { ExpGroupActions } from "./AcadExps";

type AcadExpListProps = {
  cvState: CVData;
  cvDispatch: React.Dispatch<CVAction>;
  expGroupDispatch: React.Dispatch<ExpGroupActions>;
};

export default function AcadExpList({
  cvState,
  cvDispatch,
  expGroupDispatch,
}: AcadExpListProps) {
  function handleAddExp() {
    expGroupDispatch({ type: "CREATE_EXP" });
  }

  function handleEdit(id: string) {
    expGroupDispatch({ type: "EDIT_EXP_BY_ID", value: id });
  }

  function handleDelete(id: string) {
    cvDispatch({ type: "REMOVE_ACADEMIC_EXP_BY_ID", value: id });
  }

  return (
    <div>
      <button type="button" onClick={handleAddExp}>
        Adicionar experiência
      </button>

      <ul>
        {cvState.academicExps.map((exp) => (
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
