import { Group } from "./Group";
import { AddTechForm } from "./AddTechForm";
import { TechsList } from "./TechsList";

function Techs() {
  return (
    <Group id="tecnologias" title="Tecnologias">
      <AddTechForm />
      <hr />
      <TechsList />
    </Group>
  );
}

export { Techs };
