import { useId } from "react";
import Group from "./Group";
import { CVAction, CVData } from "./CVForms";

type PersonalDataFormProps = {
  cvState: CVData;
  cvDispatch: React.Dispatch<CVAction>;
};

export default function PersonalDataForm({
  cvState,
  cvDispatch,
}: PersonalDataFormProps) {
  const { name } = cvState.personalData;

  const fullNameId = useId();

  function handleFullNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    cvDispatch({ type: "SET_NAME", value: e.target.value });
  }

  return (
    <Group title="Dados pessoais">
      <div>
        <label htmlFor={fullNameId}>Nome completo:</label>
        <input
          type="text"
          name="fullName"
          id={fullNameId}
          value={name}
          onChange={handleFullNameChange}
        />
      </div>
    </Group>
  );
}
