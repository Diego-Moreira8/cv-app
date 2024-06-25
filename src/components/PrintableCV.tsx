import { useCVState } from "../cv-reducer/hook";
import { Experience } from "../cv-reducer/types";
import { ExpPeriod } from "./ExpPeriod";
import styles from "../styles/PrintableCV.module.css";

function PrintableCV() {
  const {
    personalData,
    professionalObjective,
    techs,
    academicExps,
    professionalExps,
  } = useCVState();

  return (
    <div className={styles.container} id="printable">
      <h1>{personalData.name}</h1>
      <PersonalDataList />

      <h2>Objetivo</h2>
      <p>{professionalObjective}</p>

      <h2>Tecnologias</h2>
      <ul className={styles.techs}>
        {techs.map((t) => (
          <li key={t.id}>{t.name}</li>
        ))}
      </ul>

      <h2>Formação e cursos</h2>
      <ExperienceList experiences={academicExps} />

      <h2>Experiências Profissionais</h2>
      <ExperienceList experiences={professionalExps} />
    </div>
  );
}

function PersonalDataList() {
  const { personalData, onlineProfiles } = useCVState();

  return (
    <ul className={styles.personalDataList}>
      <li>
        <b>{personalData.location}</b>
      </li>

      <li>
        <b>E-mail: </b>
        <a href={"mailto:" + personalData.email} target="_blank">
          {personalData.email}
        </a>
      </li>

      <li>
        <b>Celular: </b>
        <a href={"tel:" + personalData.phone} target="_blank">
          {personalData.phone}
        </a>
      </li>

      <li>
        <b>Portfolio: </b>
        <a href={onlineProfiles.portfolioURL} target="_blank">
          {onlineProfiles.portfolioURL}
        </a>
      </li>

      <li>
        <b>LinkedIn: </b>
        <a href={onlineProfiles.linkedInURL} target="_blank">
          {onlineProfiles.linkedInURL}
        </a>
      </li>

      <li>
        <b>GitHub: </b>
        <a href={onlineProfiles.gitHubURL} target="_blank">
          {onlineProfiles.gitHubURL}
        </a>
      </li>
    </ul>
  );
}

function ExperienceList({ experiences }: { experiences: Experience[] }) {
  return (
    <>
      <ul className={styles.expList}>
        {experiences.map((exp) => (
          <li key={exp.id}>
            <p>
              <b>
                {exp.title} | {exp.location} | <ExpPeriod exp={exp} />
              </b>
            </p>
            <p>{exp.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export { PrintableCV };
