import styles from "../styles/CVForms.module.css";
import PersonalDataForm from "./PersonalDataForm";
import OnlineProfilesForm from "./OnlineProfilesForm";
import ProfessionalObjectiveForm from "./ProfessionalObjectiveForm";
import Techs from "./Techs";
import useCVReducer from "../useCVReducer";

export default function CVForms() {
  const { cvState, cvDispatch } = useCVReducer();

  return (
    <div className={styles.main}>
      <PersonalDataForm cvState={cvState} cvDispatch={cvDispatch} />
      <OnlineProfilesForm cvState={cvState} cvDispatch={cvDispatch} />
      <ProfessionalObjectiveForm cvState={cvState} cvDispatch={cvDispatch} />
      <Techs cvState={cvState} cvDispatch={cvDispatch} />
    </div>
  );
}
