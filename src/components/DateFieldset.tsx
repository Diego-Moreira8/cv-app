import { useId } from "react";
import { months } from "../utils/monthsArray";
import styles from "../styles/DateFieldset.module.css";

type DateFieldsetProps = {
  legend: string;

  monthInputName: string;
  monthValue: number;
  onMonthChange: React.ChangeEventHandler<HTMLSelectElement>;

  yearInputName: string;
  yearValue: string;
  onYearChange: React.ChangeEventHandler<HTMLInputElement>;

  yearError: string;
};

function DateFieldset({
  legend,
  monthInputName,
  monthValue,
  onMonthChange,
  yearInputName,
  yearValue,
  onYearChange,
  yearError,
}: DateFieldsetProps) {
  const monthId = useId();
  const yearId = useId();

  return (
    <fieldset>
      <legend>{legend}</legend>

      <div className={styles.dateInputs}>
        <div className={styles.formColumn}>
          <label htmlFor={monthId}>Mês:</label>

          <select
            name={monthInputName}
            id={monthId}
            value={monthValue}
            onChange={onMonthChange}
          >
            {months.map((m, i) => (
              <option key={i} value={i + 1}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formColumn}>
          <label htmlFor={yearId}>Ano:</label>

          <input
            type="number"
            name={yearInputName}
            id={yearId}
            required
            min={1900}
            value={yearValue}
            onChange={onYearChange}
          />
        </div>
      </div>

      <p className={styles.error}>
        <i>{yearError}</i>
      </p>
    </fieldset>
  );
}

export { DateFieldset };
