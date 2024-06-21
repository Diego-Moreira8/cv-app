import { useId } from "react";
import { Group } from "./Group";
import { FormWrapper } from "./FromWrapper";
import { useCVState, useCVDispatch } from "../cv-reducer/hook";
import styles from "../styles/ProObjForm.module.css";

function ProObjForm() {
  const cvState = useCVState();
  const cvDispatch = useCVDispatch();

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
