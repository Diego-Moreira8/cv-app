import { useId, useState } from "react";
import { v4 as uuid } from "uuid";
import { CVData, CVAction, AcademicExperience } from "../useCVReducer";

type AddAcadExpFormProps = {
  cvDispatch: React.Dispatch<CVAction>;
};

export default function AddAcadExpForm({ cvDispatch }: AddAcadExpFormProps) {
  const currYear = new Date().getFullYear().toString();

  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [startMonth, setStartMonth] = useState(1);
  const [startYear, setStartYear] = useState(currYear);
  const [endMonth, setEndMonth] = useState(1);
  const [endYear, setEndYear] = useState(currYear);
  const [description, setDescription] = useState("");

  const [startYearError, setStartYearError] = useState("");
  const [endYearError, setEndYearError] = useState("");

  const locationInputId = useId();
  const titleInputId = useId();
  const startMonthInputId = useId();
  const startYearInputId = useId();
  const endMonthInputId = useId();
  const endYearInputId = useId();
  const descriptionInputId = useId();

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const monthsOptions = months.map((m, i) => (
    <option key={i} value={i + 1}>
      {m}
    </option>
  ));

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStartYearError("");
    setEndYearError("");

    const YEAR_ERROR_MSG = "O ano parece ser inválido";

    const startYearNumber = validateYear(startYear);
    if (!startYearNumber) {
      setStartYearError(YEAR_ERROR_MSG);
      return;
    }

    const endYearNumber = validateYear(endYear);
    if (!endYearNumber) {
      setEndYearError(YEAR_ERROR_MSG);
      return;
    }

    const endsBeforeStart =
      endYearNumber < startYearNumber ||
      (endYearNumber === startYearNumber && endMonth < startMonth);
    if (endsBeforeStart) {
      setEndYearError("A data de conclusão não pode ser anterior à de início");
      return;
    }

    const newExp: AcademicExperience = {
      id: uuid(),
      location: location,
      title: title,
      startDate: { month: startMonth, year: startYearNumber },
      endDate: { month: endMonth, year: endYearNumber },
      description: description,
    };

    cvDispatch({ type: "ADD_ACADEMIC_EXP", value: newExp });
  }

  function validateMonthSelect(
    event: React.ChangeEvent<HTMLSelectElement>,
    currMonth: number
  ) {
    const newMonth = parseInt(event.target.value);
    if (isNaN(newMonth) || newMonth < 1 || newMonth > 12) {
      return currMonth;
    }
    return newMonth;
  }

  function validateYear(year: string): number | null {
    const trimmedYear = year.trim();
    if (!trimmedYear) return null;

    const yearNumber = parseInt(trimmedYear);
    if (isNaN(yearNumber) || !Number.isInteger(yearNumber)) return null;

    return yearNumber;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={locationInputId}>Nome da instituição:</label>
        <input
          type="text"
          name="location"
          id={locationInputId}
          placeholder="UFCAT - Universidade Federal de Catalão"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor={titleInputId}>Nome do curso:</label>
        <input
          type="text"
          name="title"
          id={titleInputId}
          placeholder="Ciência da Computação"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <fieldset>
        <legend>Data de início</legend>

        <label htmlFor={startMonthInputId}>Mês:</label>
        <select
          name="startMonth"
          id={startMonthInputId}
          value={startMonth}
          onChange={(e) => setStartMonth(validateMonthSelect(e, startMonth))}
        >
          {monthsOptions}
        </select>

        <label htmlFor={startYearInputId}>Ano:</label>
        <input
          type="number"
          name="startYear"
          id={startYearInputId}
          required
          min={1900}
          value={startYear}
          onChange={(e) => setStartYear(e.target.value)}
        />

        <p>{startYearError}</p>
      </fieldset>

      <fieldset>
        <legend>Data de conclusão (ou previsão):</legend>

        <label htmlFor={endMonthInputId}>Mês:</label>
        <select
          name="endMonth"
          id={endMonthInputId}
          value={endMonth}
          onChange={(e) => setEndMonth(validateMonthSelect(e, endMonth))}
        >
          {monthsOptions}
        </select>

        <label htmlFor={endYearInputId}>Ano:</label>
        <input
          type="number"
          name="endYear"
          id={endYearInputId}
          required
          min={1900}
          value={endYear}
          onChange={(e) => setEndYear(e.target.value)}
        />

        <p>{endYearError}</p>
      </fieldset>

      <div>
        <label htmlFor={descriptionInputId}>Descreva esta experiência:</label>
        <textarea
          name="description"
          id={descriptionInputId}
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      {/* <button type="button">Cancelar</button> */}
      <button type="submit">Salvar</button>
    </form>
  );
}
