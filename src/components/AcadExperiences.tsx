import { CVData, CVAction } from "../useCVReducer";
import AcadExpList from "./AcadExpList";
import AddAcadExpForm from "./AddAcadExpForm";
import Group from "./Group";

type AddAcadExpFormProps = {
  cvState: CVData;
  cvDispatch: React.Dispatch<CVAction>;
};

export default function AcadExperiences({
  cvState,
  cvDispatch,
}: AddAcadExpFormProps) {
  return (
    <Group title="Formação acadêmica">
      <AcadExpList cvState={cvState} cvDispatch={cvDispatch} />
      <hr />
      <AddAcadExpForm cvDispatch={cvDispatch} />
    </Group>
  );
}
