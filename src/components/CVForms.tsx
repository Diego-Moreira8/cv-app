import { PersonalDataForm } from "./PersonalDataForm";
import { OnlineProfilesForm } from "./OnlineProfilesForm";
import { ProObjForm } from "./ProObjForm";
import { Techs } from "./Techs";
import { ExpGroup } from "./ExpGroup";
import { ActiveGroupProvider } from "../hooks/useActiveGroup";
import { ExpType } from "../cv-reducer/types";
import styles from "../styles/CVForms.module.css";
import { AppInstructions } from "./AppInstructions";

function CVForms() {
  return (
    <ActiveGroupProvider>
      <div className={styles.main}>
        <AppInstructions />

        <PersonalDataForm />
        <OnlineProfilesForm />
        <ProObjForm />
        <Techs />
        <ExpGroup expType={ExpType.Academic} />
        <ExpGroup expType={ExpType.Professional} />
      </div>
    </ActiveGroupProvider>
  );
}

export { CVForms };
