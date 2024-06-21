import { useReducer } from "react";
import { Group } from "./Group";
import { ExpForm } from "./ExpForm";
import { ExpList } from "./ExpList";
import { ExpType } from "../cv-reducer/types";
import { useCVState, useCVDispatch } from "../cv-reducer/hook";

type ExpGroupProps = {
  expType: ExpType;
};

type ExpGroupState = { formOpen: boolean; expToEditId: string };

type ExpGroupActions =
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

function ExpGroup({ expType }: ExpGroupProps) {
  const cvState = useCVState();
  const cvDispatch = useCVDispatch();

  const [expGroupState, expGroupDispatch] = useReducer(
    expGroupReducer,
    INITIAL_STATE
  );

  return (
    <Group
      title={
        expType === ExpType.Academic
          ? "Formação acadêmica"
          : "Experiências profissionais"
      }
    >
      {expGroupState.formOpen ? (
        <ExpForm
          expType={expType}
          cvState={cvState}
          cvDispatch={cvDispatch}
          expGroupDispatch={expGroupDispatch}
          expToEditId={expGroupState.expToEditId}
        />
      ) : (
        <ExpList
          expType={expType}
          cvState={cvState}
          cvDispatch={cvDispatch}
          expGroupDispatch={expGroupDispatch}
        />
      )}
    </Group>
  );
}

export { ExpGroup };
export type { ExpGroupActions };
