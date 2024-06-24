import { useState, useId } from "react";
import { useCVState, useCVDispatch } from "../cv-reducer/hook";
import styles from "../styles/AddTechForm.module.css";

function AddTechForm() {
  const cvState = useCVState();
  const cvDispatch = useCVDispatch();

  const [techName, setTechName] = useState("");
  const [inputError, setInputError] = useState("");

  const techInputId = useId();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const techSanitized = techName.trim().toLowerCase();

    const techAlreadyExists = () =>
      cvState.techs.find(
        (t) => techSanitized === t.name.toLocaleLowerCase().trim()
      );

    if (techSanitized === "") {
      setInputError("Insira um nome primeiro.");
      setTechName("");
      return;
    }

    if (techAlreadyExists()) {
      setInputError("Esta tecnologia já foi inserida.");
      setTechName(techSanitized);
      return;
    }

    cvDispatch({ type: "ADD_TECH", value: techName });
    setInputError("");
    setTechName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={techInputId}>
          Digite o nome de uma tecnologia e aperte adicionar.
        </label>

        <div className={styles.inputRow}>
          <input
            type="text"
            name="newTech"
            id={techInputId}
            value={techName}
            onChange={(e) => setTechName(e.target.value)}
          />
          <button type="submit">Adicionar</button>
        </div>

        <p className={styles.error}>
          <i>{inputError}</i>
        </p>
      </div>
    </form>
  );
}

export { AddTechForm };
