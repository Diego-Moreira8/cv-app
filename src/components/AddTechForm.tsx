import { useState, useId } from "react";
import { CVAction } from "../cv-reducer/Actions";
import { CVData } from "../cv-reducer/types";
import styles from "../styles/AddTechForm.module.css";

type AddTechFormProps = {
  cvState: CVData;
  cvDispatch: React.Dispatch<CVAction>;
};

function AddTechForm({ cvState, cvDispatch }: AddTechFormProps) {
  const [inputError, setInputError] = useState("");

  const newTechInputId = useId();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setInputError("");

    const formData = new FormData(e.currentTarget);
    let techName = formData.get("newTech");

    if (techName) techName = techName.toString().trim();

    // Still empty?
    if (!techName) {
      setInputError("Insira um nome primeiro.");
      return;
    }

    const techAlreadyExists = cvState.techs.find(
      (t) => t.name.toLocaleLowerCase() === techName.toLowerCase()
    );

    if (techAlreadyExists) {
      setInputError("Esta tecnologia já foi inserida.");
      return;
    }

    cvDispatch({ type: "ADD_TECH", value: techName });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={newTechInputId}>
          Digite o nome de uma tecnologia e aperte adicionar.
        </label>

        <div className={styles.inputRow}>
          <input type="text" name="newTech" id={newTechInputId} />
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
