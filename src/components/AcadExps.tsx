import { useState } from "react";
import { CVData, CVAction } from "../useCVReducer";
import AcadExpList from "./AcadExpList";
import AddAcadExpForm from "./AddAcadExpForm";
import Group from "./Group";

type AddAcadExpsFormProps = {
  cvState: CVData;
  cvDispatch: React.Dispatch<CVAction>;
};

export default function AcadExps({
  cvState,
  cvDispatch,
}: AddAcadExpsFormProps) {
  const [isCreating, setIsCreating] = useState(false);

  return (
    <Group title="Formação acadêmica">
      {isCreating ? (
        <AddAcadExpForm cvDispatch={cvDispatch} setIsCreating={setIsCreating} />
      ) : (
        <AcadExpList
          cvState={cvState}
          cvDispatch={cvDispatch}
          setIsCreating={setIsCreating}
        />
      )}
    </Group>
  );
}
