import { useReducer } from "react";
import { Group } from "./Group";
import { ExpForm } from "./ExpForm";
import { ExpList } from "./ExpList";
import { ExpType } from "../cv-reducer/types";

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
      return { ...state, formOpen: false, expToEditId: "" };
    case "CREATE_EXP":
      return { ...state, formOpen: true, expToEditId: "" };
    case "EDIT_EXP_BY_ID":
      return { ...state, formOpen: true, expToEditId: action.value };
  }
}

function ExpGroup({ expType }: ExpGroupProps) {
  const [expGroupState, expGroupDispatch] = useReducer(
    expGroupReducer,
    INITIAL_STATE
  );

  return (
    <Group
      {...(expType === ExpType.Academic
        ? { id: "formacao-academica", title: "Formação acadêmica" }
        : {
            id: "experiencias-profissionais",
            title: "Experiências profissionais",
          })}
    >
      {expGroupState.formOpen ? (
        <ExpForm
          expType={expType}
          expGroupDispatch={expGroupDispatch}
          expToEditId={expGroupState.expToEditId}
        />
      ) : (
        <ExpList expType={expType} expGroupDispatch={expGroupDispatch} />
      )}
    </Group>
  );
}

export { ExpGroup };
export type { ExpGroupActions };
