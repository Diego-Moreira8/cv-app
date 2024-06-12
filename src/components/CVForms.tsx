import { useReducer } from "react";
import styles from "../styles/CVForms.module.css";
import PersonalDataForm from "./PersonalDataForm";

type PersonalData = {
  name: string;
  location: string;
  phone: string;
  email: string;
};

export type CVData = {
  personalData: PersonalData;
};

export type CVAction =
  | {
      type: "SET_NAME";
      value: string;
    }
  | {
      type: "SET_LOCATION";
      value: string;
    }
  | {
      type: "SET_PHONE";
      value: string;
    }
  | {
      type: "SET_EMAIL";
      value: string;
    };

const INITIAL_CV: CVData = {
  personalData: { name: "", location: "", phone: "", email: "" },
};

function cvReducer(state: CVData, action: CVAction) {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        personalData: { ...state.personalData, name: action.value },
      };
    case "SET_LOCATION":
      return {
        ...state,
        personalData: { ...state.personalData, location: action.value },
      };
    case "SET_PHONE":
      return {
        ...state,
        personalData: { ...state.personalData, phone: action.value },
      };
    case "SET_EMAIL":
      return {
        ...state,
        personalData: { ...state.personalData, email: action.value },
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
