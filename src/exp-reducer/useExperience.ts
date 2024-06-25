import { useReducer } from "react";
import { v4 as uuid } from "uuid";
import { CVData, ExpType, Experience } from "../cv-reducer/types";

enum InputNames {
  Location = "location",
  Title = "title",
  InProgress = "inProgress",
  StartMonth = "startMonth",
  StartYear = "startYear",
  EndMonth = "endMonth",
  EndYear = "endYear",
  Description = "description",
}

type FormActions =
  | {
      inputName: InputNames;
      value: string;
    }
  | {
      inputName: InputNames.InProgress;
      value: boolean;
    };

const CURR_YEAR = new Date().getFullYear().toString();

const EMPTY_EXP: Omit<Experience, "id"> = {
  location: "",
  title: "",
  startMonth: 1,
  startYear: CURR_YEAR,
  endMonth: 1,
  endYear: CURR_YEAR,
  description: "",
};

function expReducer(state: Experience, action: FormActions) {
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

  if (inputName === InputNames.InProgress) {
    return {
      ...state,
      inProgress: !!value,
    };
  }

  return {
    ...state,
    [inputName]: value,
  };
}

function useExperience(expType: ExpType, cvState: CVData, expToEditId: string) {
  const isAcademic = expType === ExpType.Academic;
  const experiences = cvState[isAcademic ? "academicExps" : "professionalExps"];
  const expFound = experiences.find((exp) => exp.id === expToEditId);

  const [formState, formDispatch] = useReducer(
    expReducer,
    expFound ? expFound : { ...EMPTY_EXP, id: uuid() }
  );

  return { formState, formDispatch };
}

export { useExperience, InputNames };
