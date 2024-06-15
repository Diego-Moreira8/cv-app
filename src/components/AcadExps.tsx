import { useReducer } from "react";
import { CVData, CVAction } from "../useCVReducer";
import AcadExpList from "./AcadExpList";
import AddAcadExpForm from "./AddAcadExpForm";
import Group from "./Group";

type ExpGroupProps = {
  cvState: CVData;
  cvDispatch: React.Dispatch<CVAction>;
  expToEditId: string;
};

type ExpGroupState = { formOpen: boolean; expToEditId: string };

export type ExpGroupActions =
  | { type: "CLOSE_FORM" }
  | { type: "CREATE_EXP" }
  | { type: "EDIT_EXP_BY_ID"; value: string };

const INITIAL_STATE: ExpGroupState = { formOpen: false, expToEditId: "" };

function expGroupReducer(state: ExpGroupState, action: ExpGroupActions) {
  switch (action.type) {
    case "CLOSE_FORM":
      return { formOpen: false, expToEditId: "" };
    case "CREATE_EXP":
      return { formOpen: true, expToEditId: "" };
    case "EDIT_EXP_BY_ID":
      return { formOpen: true, expToEditId: action.value };
  }
}

export default function ExpGroup({ cvState, cvDispatch }: ExpGroupProps) {
  const [expGroupState, expGroupDispatch] = useReducer(
    expGroupReducer,
    INITIAL_STATE
  );

  return (
    <Group title="Formação acadêmica">
      {expGroupState.formOpen ? (
        <AddAcadExpForm
          cvState={cvState}
          cvDispatch={cvDispatch}
          expGroupDispatch={expGroupDispatch}
          expToEditId={expGroupState.expToEditId}
        />
      ) : (
        <AcadExpList
          cvState={cvState}
          cvDispatch={cvDispatch}
          expGroupDispatch={expGroupDispatch}
        />
      )}
    </Group>
  );
}
