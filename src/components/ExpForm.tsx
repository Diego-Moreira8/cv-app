import { useId, useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
import { ExpGroupActions } from "./ExpGroup";
import { yearStrToNumber } from "../utils/yearStrToNumber";
import { months } from "../utils/monthsArray";
import { CVAction } from "../cv-reducer/actions";
import { ExpType, CVData, Experience } from "../cv-reducer/types";
import styles from "../styles/ExpForm.module.css";

enum InputNames {
  Location = "location",
  Title = "title",
  StartMonth = "startMonth",
  StartYear = "startYear",
  EndMonth = "endMonth",
  EndYear = "endYear",
  Description = "description",
}

type ExpFormProps = {
  expType: ExpType;
  cvState: CVData;
  cvDispatch: React.Dispatch<CVAction>;
  expGroupDispatch: React.Dispatch<ExpGroupActions>;
  expToEditId: string;
};

type FormActions = {
  inputName: InputNames;
  value: string;
};

const CURR_YEAR = new Date().getFullYear().toString();

const INITIAL_EXP: Omit<Experience, "id"> = {
  // ID will be generated on reducer creation if necessary
  location: "",
  title: "",
  startMonth: 1,
  startYear: CURR_YEAR,
  endMonth: 1,
  endYear: CURR_YEAR,
  description: "",
};

function formReducer(state: Experience, action: FormActions) {
  const { inputName, value } = action;

  if (
    inputName === InputNames.StartMonth ||
    inputName === InputNames.EndMonth
  ) {
    return {
      ...state,
      [inputName]: parseInt(value),
    };
  }

  return {
    ...state,
    [inputName]: value,
  };
}

function ExpForm({
  expType,
  cvState,
  cvDispatch,
  expGroupDispatch,
  expToEditId,
}: ExpFormProps) {
  const isAcademic = expType === ExpType.Academic;

  let expToEdit = null;
  if (expToEditId) {
    const experiences = isAcademic
      ? cvState.academicExps
      : cvState.professionalExps;

    expToEdit = experiences.find((exp) => exp.id === expToEditId);
  }

  const [formState, formDispatch] = useReducer(
    formReducer,
    expToEdit ? expToEdit : { ...INITIAL_EXP, id: uuid() }
  );

  const [startYearError, setStartYearError] = useState("");
  const [endYearError, setEndYearError] = useState("");

  const locationInputId = useId();
  const titleInputId = useId();
  const startMonthInputId = useId();
  const startYearInputId = useId();
  const endMonthInputId = useId();
  const endYearInputId = useId();
  const descriptionInputId = useId();

  const monthsOptionsElements = months.map((m, i) => (
    <option key={i} value={i + 1}>
      {m}
    </option>
  ));

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Validate year inputs
    setStartYearError("");
    setEndYearError("");

    const YEAR_ERROR_MSG = "O ano parece ser inválido";
    const startYearNumber = yearStrToNumber(formState.startYear);
    const endYearNumber = yearStrToNumber(formState.endYear);

    if (!startYearNumber) {
      setStartYearError(YEAR_ERROR_MSG);
      return;
    }

    if (!endYearNumber) {
      setEndYearError(YEAR_ERROR_MSG);
      return;
    }

    const endsBeforeStart =
      endYearNumber < startYearNumber ||
      (endYearNumber === startYearNumber &&
        formState.endMonth < formState.startMonth);

    if (endsBeforeStart) {
      setEndYearError("A data de conclusão não pode ser anterior à de início");
      return;
    }

    if (expToEditId) {
      cvDispatch({
        type: "EDIT_EXPERIENCE",
        expType: expType,
        value: formState,
      });
    } else {
      cvDispatch({
        type: "ADD_EXPERIENCE",
        expType: expType,
        value: formState,
      });
    }

    expGroupDispatch({ type: "CLOSE_FORM" });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>
        {isAcademic ? "Adicionar curso" : "Adicionar experiência profissional"}
      </h3>

      <div className={styles.formRow}>
        <label htmlFor={locationInputId}>
          Nome da {isAcademic ? "instituição" : "Empresa"}:
        </label>
        <input
          type="text"
          name={InputNames.Location}
          id={locationInputId}
          placeholder={
            isAcademic ? "UFCAT - Universidade Federal de Catalão" : "Google"
          }
          required
          value={formState.location}
          onChange={(e) =>
            formDispatch({
              inputName: InputNames.Location,
              value: e.target.value,
            })
          }
        />
      </div>

      <div className={styles.formRow}>
        <label htmlFor={titleInputId}>Nome do curso:</label>
        <input
          type="text"
          name={InputNames.Title}
          id={titleInputId}
          placeholder={
            isAcademic ? "Ciência da Computação" : "Desenvolvedor Front-End"
          }
          required
          value={formState.title}
          onChange={(e) =>
            formDispatch({
              inputName: InputNames.Title,
              value: e.target.value,
            })
          }
        />
      </div>

      <fieldset>
        <legend>Data de início</legend>

        <div className={styles.dateInputs}>
          <div className={styles.formRow}>
            <label htmlFor={startMonthInputId}>Mês:</label>
            <select
              name={InputNames.StartMonth}
              id={startMonthInputId}
              value={formState.startMonth}
              onChange={(e) =>
                formDispatch({
                  inputName: InputNames.StartMonth,
                  value: e.target.value,
                })
              }
            >
              {monthsOptionsElements}
            </select>
          </div>
          <div className={styles.formRow}>
            <label htmlFor={startYearInputId}>Ano:</label>
            <input
              type="number"
              name={InputNames.StartYear}
              id={startYearInputId}
              required
              min={1900}
              value={formState.startYear}
              onChange={(e) =>
                formDispatch({
                  inputName: InputNames.StartYear,
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>

        <p className={styles.error}>
          <i>{startYearError}</i>
        </p>
      </fieldset>

      <fieldset>
        <legend>Data de conclusão (ou previsão):</legend>

        <div className={styles.dateInputs}>
          <div className={styles.formRow}>
            <label htmlFor={endMonthInputId}>Mês:</label>
            <select
              name={InputNames.EndMonth}
              id={endMonthInputId}
              value={formState.endMonth}
              onChange={(e) =>
                formDispatch({
                  inputName: InputNames.EndMonth,
                  value: e.target.value,
                })
              }
            >
              {monthsOptionsElements}
            </select>
          </div>

          <div className={styles.formRow}>
            <label htmlFor={endYearInputId}>Ano:</label>
            <input
              type="number"
              name={InputNames.EndYear}
              id={endYearInputId}
              required
              min={1900}
              value={formState.endYear}
              onChange={(e) =>
                formDispatch({
                  inputName: InputNames.EndYear,
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>

        <p className={styles.error}>
          <i>{endYearError}</i>
        </p>
      </fieldset>

      <div className={styles.formRow}>
        <label htmlFor={descriptionInputId}>Descreva esta experiência:</label>
        <textarea
          name={InputNames.Description}
          id={descriptionInputId}
          rows={5}
          value={formState.description}
          onChange={(e) =>
            formDispatch({
              inputName: InputNames.Description,
              value: e.target.value,
            })
          }
        ></textarea>
      </div>

      <div className={styles.buttons}>
        <button
          type="button"
          onClick={() => expGroupDispatch({ type: "CLOSE_FORM" })}
        >
          Cancelar
        </button>
        <button className="ok" type="submit">
          Salvar
        </button>
      </div>
    </form>
  );
}

export { ExpForm };
