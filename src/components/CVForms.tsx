import { PersonalDataForm } from "./PersonalDataForm";
import { OnlineProfilesForm } from "./OnlineProfilesForm";
import { ProObjForm } from "./ProObjForm";
import { Techs } from "./Techs";
import { ExpGroup } from "./ExpGroup";
import { CVProvider } from "../cv-reducer/hook";
import { ExpType } from "../cv-reducer/types";
import styles from "../styles/CVForms.module.css";

function CVForms() {
  // const { cvState, cvDispatch } = useCVReducer();

  return (
    <CVProvider>
      <div className={styles.main}>
        <PersonalDataForm />
        <OnlineProfilesForm />
        <ProObjForm />
        <Techs />
        <ExpGroup expType={ExpType.Academic} />
        <ExpGroup expType={ExpType.Professional} />
      </div>
    </CVProvider>
  );
}

export { CVForms };
