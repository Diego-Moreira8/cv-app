import Group from "./Group";
import { CVAction, CVData } from "./CVForms";
import AddTechForm from "./AddTechForm";
import TechsList from "./TechsList";

type TechsProps = {
  cvState: CVData;
  cvDispatch: React.Dispatch<CVAction>;
};

export default function Techs({ cvState, cvDispatch }: TechsProps) {
  return (
    <Group title="Objetivo profissional">
      <AddTechForm cvState={cvState} cvDispatch={cvDispatch} />
      <TechsList cvState={cvState} cvDispatch={cvDispatch} />
    </Group>
  );
}
