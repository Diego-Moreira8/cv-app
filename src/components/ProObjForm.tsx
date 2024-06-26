import { Group } from "./Group";
import { FormWrapper } from "./FromWrapper";
import { Textarea } from "./Textarea";
import { useCVState, useCVDispatch } from "../cv-reducer/hook";
import { PRO_OBJ_EXAMPLE } from "../cv-reducer/cvTemplates";
import styles from "../styles/ProObjForm.module.css";

function ProObjForm() {
  const cvState = useCVState();
  const cvDispatch = useCVDispatch();

  function addTemplate() {
    cvDispatch({ type: "SET_PROFESSIONAL_OBJECTIVE", value: PRO_OBJ_EXAMPLE });
  }

  function clear() {
    cvDispatch({ type: "SET_PROFESSIONAL_OBJECTIVE", value: "" });
  }

  return (
    <Group title="Objetivo profissional">
      <FormWrapper>
        <Textarea
          label="Este é o lugar onde você pode comunicar seus objetivos de carreira de forma clara e concisa."
          name="professionalObjective"
          rows={10}
          value={cvState.professionalObjective}
          onChange={(e) =>
            cvDispatch({
              type: "SET_PROFESSIONAL_OBJECTIVE",
              value: e.target.value,
            })
          }
        />

        <div className={styles.buttons}>
          <button type="button" onClick={addTemplate}>
            Inserir um modelo
          </button>

          <button className="danger" type="button" onClick={clear}>
            Limpar
          </button>
        </div>
      </FormWrapper>
    </Group>
  );
}

export { ProObjForm };
