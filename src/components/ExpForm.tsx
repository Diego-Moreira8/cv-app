import { useState } from "react";
import { ExpGroupActions } from "./ExpGroup";
import { Input } from "./Input";
import { DateFieldset } from "./DateFieldset";
import { Textarea } from "./Textarea";
import { yearStrToNumber } from "../utils/yearStrToNumber";
import { ExpType } from "../cv-reducer/types";
import { useCVState, useCVDispatch } from "../cv-reducer/hook";
import { InputNames, useExperience } from "../exp-reducer/useExperience";
import styles from "../styles/ExpForm.module.css";
import { Checkbox } from "./Checkbox";

type ExpFormProps = {
  expType: ExpType;
  expToEditId: string;
  expGroupDispatch: React.Dispatch<ExpGroupActions>;
};

function ExpForm({ expType, expToEditId, expGroupDispatch }: ExpFormProps) {
  const cvState = useCVState();
  const cvDispatch = useCVDispatch();

  const { formDispatch, formState } = useExperience(
    expType,
    cvState,
    expToEditId
  );

  const isAcademic = expType === ExpType.Academic;

  const [startYearError, setStartYearError] = useState("");
  const [endYearError, setEndYearError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

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

    if (!formState.inProgress && endsBeforeStart) {
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

      <Input
        label={`Nome da ${isAcademic ? "instituição" : "Empresa"}:`}
        type="text"
        name={InputNames.Location}
        placeholder={
          isAcademic ? "UFCAT - Universidade Federal de Catalão" : "Google"
        }
        required={true}
        value={formState.location}
        onChange={(e) =>
          formDispatch({
            inputName: InputNames.Location,
            value: e.target.value,
          })
        }
      />

      <Input
        label={isAcademic ? "Nome do curso:" : "Posição:"}
        type="text"
        name={InputNames.Title}
        placeholder={
          isAcademic ? "Ciência da Computação" : "Desenvolvedor Front-End"
        }
        required={true}
        value={formState.title}
        onChange={(e) =>
          formDispatch({
            inputName: InputNames.Title,
            value: e.target.value,
          })
        }
      />

      <DateFieldset
        legend="Data de início"
        monthInputName={InputNames.StartMonth}
        monthValue={formState.startMonth}
        onMonthChange={(e) =>
          formDispatch({
            inputName: InputNames.StartMonth,
            value: e.target.value,
          })
        }
        yearInputName={InputNames.StartYear}
        yearValue={formState.startYear}
        onYearChange={(e) =>
          formDispatch({
            inputName: InputNames.StartYear,
            value: e.target.value,
          })
        }
        yearError={startYearError}
      />

      {!isAcademic && (
        <Checkbox
          label="Ainda trabalho aqui"
          name="expInProgress"
          checked={!!formState.inProgress}
          onChange={(e) =>
            formDispatch({
              inputName: InputNames.InProgress,
              value: e.target.checked,
            })
          }
        />
      )}

      {!formState.inProgress && (
        <DateFieldset
          legend={
            isAcademic ? "Data de conclusão (ou previsão)" : "Data de saída"
          }
          monthInputName={InputNames.EndMonth}
          monthValue={formState.endMonth}
          onMonthChange={(e) =>
            formDispatch({
              inputName: InputNames.EndMonth,
              value: e.target.value,
            })
          }
          yearInputName={InputNames.EndYear}
          yearValue={formState.endYear}
          onYearChange={(e) =>
            formDispatch({
              inputName: InputNames.EndYear,
              value: e.target.value,
            })
          }
          yearError={endYearError}
        />
      )}

      <Textarea
        label="Descreva esta experiência:"
        name={InputNames.Description}
        rows={5}
        value={formState.description}
        onChange={(e) =>
          formDispatch({
            inputName: InputNames.Description,
            value: e.target.value,
          })
        }
      />

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
