import { Fragment } from "react";
import { useCVState } from "../cv-reducer/hook";
import { Experience } from "../cv-reducer/types";
import { ExpPeriod } from "./ExpPeriod";
import { removeHttp } from "../utils/removeHttp";
import styles from "../styles/PrintableCV.module.css";
import { formatPhoneNumber } from "../utils/formatPhoneNumber";
import { validateUrl } from "../utils/validateUrl";

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
  const {
    personalData: {
      location,
      email,
      phone: { number, isWhatsApp },
    },
    onlineProfiles: { gitHubURL, linkedInURL, portfolioURL },
  } = useCVState();

  return (
    <ul className={styles.personalDataList}>
      {location !== "" && (
        <li>
          <b>{location}</b>
        </li>
      )}

      {email !== "" && (
        <li>
          <b>E-mail: </b>
          <a href={"mailto:" + email} target="_blank">
            {email}
          </a>
        </li>
      )}

      {number !== "" && (
        <li>
          <b>Celular: </b>
          <a
            href={`${isWhatsApp ? "https://wa.me/+55" : "tel:"}${number}`}
            target="_blank"
          >
            {formatPhoneNumber(number)}
          </a>
        </li>
      )}

      {portfolioURL !== "" && (
        <li>
          <b>Portfolio: </b>
          <a href={validateUrl(portfolioURL)} target="_blank">
            {removeHttp(portfolioURL)}
          </a>
        </li>
      )}

      {linkedInURL !== "" && (
        <li>
          <b>LinkedIn: </b>
          <a href={linkedInURL} target="_blank">
            {removeHttp(linkedInURL)}
          </a>
        </li>
      )}

      {gitHubURL !== "" && (
        <li>
          <b>GitHub: </b>
          <a href={gitHubURL} target="_blank">
            {removeHttp(gitHubURL)}
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
