import { Group } from "./Group";
import { FormWrapper } from "./FormWrapper";
import { Textarea } from "./Textarea";
import { useCVState, useCVDispatch } from "../cv-reducer/hook";
import { useConfirmation } from "../hooks/useConfirmation";
import { PRO_OBJ_EXAMPLE } from "../cv-reducer/cvTemplates";
import styles from "../styles/ProObjForm.module.css";

function ProObjForm() {
  const cvState = useCVState();
  const cvDispatch = useCVDispatch();
  const { ConfirmationModal, confirmAction } = useConfirmation();

  async function addTemplate() {
    const replace = () =>
      cvDispatch({
        type: "SET_PROFESSIONAL_OBJECTIVE",
        value: PRO_OBJ_EXAMPLE,
      });

    if (cvState.professionalObjective.length === 0) {
      replace();
      return;
    }

    const confirmed = await confirmAction(
      "Inserir um modelo irá substituir todo o texto já inserido. Tem certeza que deseja inserir?"
    );

    if (confirmed) replace();
  }

  async function clear() {
    const confirmed = await confirmAction(
      "Tem certeza que deseja limpar todo o texto?"
    );

    if (confirmed) {
      cvDispatch({ type: "SET_PROFESSIONAL_OBJECTIVE", value: "" });
    }
  }

  return (
    <Group id="objetivo-profissional" title="Objetivo profissional">
      <FormWrapper>
        {ConfirmationModal()}

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

          <button
            className="danger"
            type="button"
            onClick={clear}
            disabled={cvState.professionalObjective.length === 0}
          >
            Limpar
          </button>
        </div>
      </FormWrapper>
    </Group>
  );
}

export { ProObjForm };
