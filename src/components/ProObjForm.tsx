import { useId } from "react";
import { Group } from "./Group";
import { FormWrapper } from "./FromWrapper";
import { CVAction } from "../cv-reducer/Actions";
import { CVData } from "../cv-reducer/types";
import styles from "../styles/ProObjForm.module.css";

type ProObjFormProps = {
  cvState: CVData;
  cvDispatch: React.Dispatch<CVAction>;
};

function ProObjForm({ cvState, cvDispatch }: ProObjFormProps) {
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
            className={styles.textarea}
            name="professionalObjective"
            id={proObjTextAreaId}
            rows={10}
            value={professionalObjective}
            onChange={handleProObjChange}
          ></textarea>
        </div>
      </FormWrapper>
    </Group>
  );
}

export { ProObjForm };
