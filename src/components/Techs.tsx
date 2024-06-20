import { Group } from "./Group";
import { AddTechForm } from "./AddTechForm";
import { TechsList } from "./TechsList";
import { CVAction } from "../cv-reducer/Actions";
import { CVData } from "../cv-reducer/types";

type TechsProps = {
  cvState: CVData;
  cvDispatch: React.Dispatch<CVAction>;
};

function Techs({ cvState, cvDispatch }: TechsProps) {
  return (
    <Group title="Tecnologias">
      <AddTechForm cvState={cvState} cvDispatch={cvDispatch} />
      <hr />
      <TechsList cvState={cvState} cvDispatch={cvDispatch} />
    </Group>
  );
}

export { Techs };
