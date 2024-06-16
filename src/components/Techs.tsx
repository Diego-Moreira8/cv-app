import Group from "./Group";
import { CVAction, CVData } from "../useCVReducer";
import AddTechForm from "./AddTechForm";
import TechsList from "./TechsList";

type TechsProps = {
  cvState: CVData;
  cvDispatch: React.Dispatch<CVAction>;
};

export default function Techs({ cvState, cvDispatch }: TechsProps) {
  return (
    <Group title="Tecnologias">
      <AddTechForm cvState={cvState} cvDispatch={cvDispatch} />
      <hr />
      <TechsList cvState={cvState} cvDispatch={cvDispatch} />
    </Group>
  );
}
