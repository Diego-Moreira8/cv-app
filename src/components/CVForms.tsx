import styles from "../styles/CVForms.module.css";
import PersonalDataForm from "./PersonalDataForm";
import OnlineProfilesForm from "./OnlineProfilesForm";
import ProObjForm from "./ProObjForm";
import Techs from "./Techs";
import useCVReducer, { ExpType } from "../useCVReducer";
import ExpGroup from "./ExpGroup";

export default function CVForms() {
  const { cvState, cvDispatch } = useCVReducer();

  return (
    <div className={styles.main}>
      <PersonalDataForm cvState={cvState} cvDispatch={cvDispatch} />
      <OnlineProfilesForm cvState={cvState} cvDispatch={cvDispatch} />
      <ProObjForm cvState={cvState} cvDispatch={cvDispatch} />
      <Techs cvState={cvState} cvDispatch={cvDispatch} />
      <ExpGroup
        expType={ExpType.Academic}
        cvState={cvState}
        cvDispatch={cvDispatch}
      />
      <ExpGroup
        expType={ExpType.Professional}
        cvState={cvState}
        cvDispatch={cvDispatch}
      />
    </div>
  );
}
