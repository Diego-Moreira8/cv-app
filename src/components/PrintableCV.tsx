import { Fragment } from "react";
import { useCVState } from "../cv-reducer/hook";
import { Experience } from "../cv-reducer/types";
import { ExpPeriod } from "./ExpPeriod";
import { removeHttp } from "../utils/removeHttp";
import styles from "../styles/PrintableCV.module.css";
import { formatPhoneNumber } from "../utils/formatPhoneNumber";

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
      {personalData.name !== "" && <h1>{personalData.name}</h1>}
      <PersonalDataList />

      {professionalObjective !== "" && (
        <>
          <h2>Objetivo</h2>
          <p>{professionalObjective}</p>
        </>
      )}

      {techs.length > 0 && (
        <>
          <h2>Tecnologias</h2>
          <ul className={styles.techs}>
            {techs.map((t) => (
              <li key={t.id}>{t.name}</li>
            ))}
          </ul>
        </>
      )}

      {academicExps.length > 0 && (
        <>
          <h2>Formação e cursos</h2>
          <ExperienceList experiences={academicExps} />
        </>
      )}

      {professionalExps.length > 0 && (
        <>
          <h2>Experiências Profissionais</h2>
          <ExperienceList experiences={professionalExps} />
        </>
      )}
    </div>
  );
}

function PersonalDataList() {
  const { personalData, onlineProfiles } = useCVState();

  return (
    <ul className={styles.personalDataList}>
      {personalData.location !== "" && (
        <li>
          <b>{personalData.location}</b>
        </li>
      )}

      {personalData.email !== "" && (
        <li>
          <b>E-mail: </b>
          <a href={"mailto:" + personalData.email} target="_blank">
            {personalData.email}
          </a>
        </li>
      )}

      {personalData.phone.number !== "" && (
        <li>
          <b>Celular: </b>
          <a
            href={`${
              personalData.phone.isWhatsApp ? "https://wa.me/+55" : "tel:"
            }${personalData.phone.number}`}
            target="_blank"
          >
            {formatPhoneNumber(personalData.phone.number)}
          </a>
        </li>
      )}

      {onlineProfiles.portfolioURL !== "" && (
        <li>
          <b>Portfolio: </b>
          <a href={onlineProfiles.portfolioURL} target="_blank">
            {removeHttp(onlineProfiles.portfolioURL)}
          </a>
        </li>
      )}

      {onlineProfiles.linkedInURL !== "" && (
        <li>
          <b>LinkedIn: </b>
          <a href={onlineProfiles.linkedInURL} target="_blank">
            {removeHttp(onlineProfiles.linkedInURL)}
          </a>
        </li>
      )}

      {onlineProfiles.gitHubURL !== "" && (
        <li>
          <b>GitHub: </b>
          <a href={onlineProfiles.gitHubURL} target="_blank">
            {removeHttp(onlineProfiles.gitHubURL)}
          </a>
        </li>
      )}
    </ul>
  );
}

function ExperienceList({ experiences }: { experiences: Experience[] }) {
  return (
    <>
      <dl className={styles.expDl}>
        {experiences.map((exp) => (
          <Fragment key={exp.id}>
            <dt>
              <b>{exp.title}</b> | {exp.location} | <ExpPeriod exp={exp} />
            </dt>

            <dd>{exp.description}</dd>
          </Fragment>
        ))}
      </dl>
    </>
  );
}

export { PrintableCV };
