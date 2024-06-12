import { useReducer } from "react";
import styles from "../styles/CVForms.module.css";
import PersonalDataForm from "./PersonalDataForm";

type PersonalData = {
  name: string;
};

export type CVData = {
  personalData: PersonalData;
};

export type CVAction = {
  type: "SET_NAME";
  value: string;
};

const INITIAL_CV: CVData = { personalData: { name: "" } };

function cvReducer(state: CVData, action: CVAction) {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        personalData: { ...state.personalData, name: action.value },
      };
  }
}

export default function CVForms() {
  const [cvState, cvDispatch] = useReducer(cvReducer, INITIAL_CV);

  return (
    <div className={styles.main}>
      <PersonalDataForm cvState={cvState} cvDispatch={cvDispatch} />
    </div>
  );
}
