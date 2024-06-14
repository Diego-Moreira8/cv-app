import { CVData, CVAction } from "../useCVReducer";
import months from "../utils/monthsArray";

type AcadExpListProps = {
  cvState: CVData;
  cvDispatch: React.Dispatch<CVAction>;
};

export default function AcadExpList({ cvState, cvDispatch }: AcadExpListProps) {
  return (
    <ul>
      {cvState.academicExps.map((exp) => (
        <li key={exp.id}>
          <p>
            <strong>{exp.title}</strong>
          </p>

          <p>{exp.location}</p>

          <p>
            de {months[exp.startDate.month]}/{exp.startDate.year} até{" "}
            {months[exp.startDate.year]}
          </p>

          <p>{exp.description}</p>
        </li>
      ))}
    </ul>
  );
}
