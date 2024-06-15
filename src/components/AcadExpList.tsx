import { CVData, CVAction } from "../useCVReducer";
import months from "../utils/monthsArray";

type AcadExpListProps = {
  cvState: CVData;
  cvDispatch: React.Dispatch<CVAction>;
  setIsCreating: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AcadExpList({
  cvState,
  cvDispatch,
  setIsCreating,
}: AcadExpListProps) {
  function handleAddExp() {
    setIsCreating(true);
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
              de {months[exp.startDate.month]}/{exp.startDate.year} até{" "}
              {months[exp.endDate.month]}/{exp.endDate.year}
            </p>

            <p>{exp.description}</p>

            <div>
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
