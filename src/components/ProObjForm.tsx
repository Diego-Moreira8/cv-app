import { Group } from "./Group";
import { FormWrapper } from "./FromWrapper";
import { Textarea } from "./Textarea";
import { useCVState, useCVDispatch } from "../cv-reducer/hook";

function ProObjForm() {
  const cvState = useCVState();
  const cvDispatch = useCVDispatch();

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
      </FormWrapper>
    </Group>
  );
}

export { ProObjForm };
