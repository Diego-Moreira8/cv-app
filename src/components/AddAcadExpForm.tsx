import { useId, useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
import { CVData, CVAction, AcademicExperience } from "../useCVReducer";
import months from "../utils/monthsArray";
import yearStrToNumber from "../utils/yearStrToNumber";

enum InputNames {
  Location = "location",
  Title = "title",
  StartMonth = "startMonth",
  StartYear = "startYear",
  EndMonth = "endMonth",
  EndYear = "endYear",
  Description = "description",
}

type FormData = {
  location: string;
  title: string;
  startMonth: number;
  startYear: string;
  endMonth: number;
  endYear: string;
  description: string;
};

type AddAcadExpFormProps = {
  cvDispatch: React.Dispatch<CVAction>;
  setIsCreating: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormActions = {
  inputName: InputNames;
  value: string;
};

const CURR_YEAR = new Date().getFullYear().toString();

const INITIAL_INPUTS: FormData = {
  location: "",
  title: "",
  startMonth: 1,
  startYear: CURR_YEAR,
  endMonth: 1,
  endYear: CURR_YEAR,
  description: "",
};

function formReducer(state: FormData, action: FormActions) {
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

export default function AddAcadExpForm({
  cvDispatch,
  setIsCreating,
}: AddAcadExpFormProps) {
  const [formState, formDispatch] = useReducer(formReducer, INITIAL_INPUTS);

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

    // If valid inputs, save experience
    const newExp: AcademicExperience = {
      id: uuid(),
      location: formState.location,
      title: formState.title,
      startDate: { month: formState.startMonth, year: startYearNumber },
      endDate: { month: formState.endMonth, year: endYearNumber },
      description: formState.description,
    };

    cvDispatch({ type: "ADD_ACADEMIC_EXP", value: newExp });
    setIsCreating(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={locationInputId}>Nome da instituição:</label>
        <input
          type="text"
          name={InputNames.Location}
          id={locationInputId}
          placeholder="UFCAT - Universidade Federal de Catalão"
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

      <div>
        <label htmlFor={titleInputId}>Nome do curso:</label>
        <input
          type="text"
          name={InputNames.Title}
          id={titleInputId}
          placeholder="Ciência da Computação"
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

        <p>{startYearError}</p>
      </fieldset>

      <fieldset>
        <legend>Data de conclusão (ou previsão):</legend>

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

        <p>{endYearError}</p>
      </fieldset>

      <div>
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

      {/* <button type="button">Cancelar</button> */}
      <button type="submit">Salvar</button>
    </form>
  );
}
