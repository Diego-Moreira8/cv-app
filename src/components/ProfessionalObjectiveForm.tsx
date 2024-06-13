import { useId } from "react";
import Group from "./Group";
import { CVAction, CVData } from "../useCVReducer";
import FormWrapper from "./FromWrapper";

type ProfessionalObjectiveFormProps = {
  cvState: CVData;
  cvDispatch: React.Dispatch<CVAction>;
};

export default function ProfessionalObjectiveForm({
  cvState,
  cvDispatch,
}: ProfessionalObjectiveFormProps) {
  const { professionalObjective } = cvState;

  const proObjTextAreaId = useId();

  function handleProObjChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    cvDispatch({ type: "SET_PROFESSIONAL_OBJECTIVE", value: e.target.value });
  }

  return (
    <Group title="Objetivo profissional">
      <FormWrapper>
        <div>
          <label htmlFor={proObjTextAreaId}>
            Este é o lugar onde você pode comunicar seus objetivos de carreira
            de forma clara e concisa.
          </label>

          <textarea
            name="professionalObjective"
            id={proObjTextAreaId}
            rows={5}
            value={professionalObjective}
            onChange={handleProObjChange}
          ></textarea>
        </div>
      </FormWrapper>
    </Group>
  );
}
