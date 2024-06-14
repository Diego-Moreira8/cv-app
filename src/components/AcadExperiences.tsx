import { CVData, CVAction } from "../useCVReducer";
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
      <AddAcadExpForm cvDispatch={cvDispatch} />
    </Group>
  );
}
