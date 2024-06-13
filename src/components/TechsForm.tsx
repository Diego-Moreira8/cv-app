import Group from "./Group";
import { CVAction, CVData } from "./CVForms";
import AddTechForm from "./AddTechForm";

type TechsFormProps = {
  cvState: CVData;
  cvDispatch: React.Dispatch<CVAction>;
};

export default function TechsForm({ cvState, cvDispatch }: TechsFormProps) {
  const { techs } = cvState;

  return (
    <Group title="Objetivo profissional">
      <AddTechForm techs={techs} cvDispatch={cvDispatch} />
    </Group>
  );
}
