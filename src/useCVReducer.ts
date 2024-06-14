import { useReducer } from "react";
import { v4 as uuid } from "uuid";

type PersonalData = {
  name: string;
  location: string;
  phone: string;
  email: string;
};

type OnlineProfiles = {
  portfolioURL: string;
  gitHubUsername: string;
  linkedInUsername: string;
};

type Tech = { id: string; name: string };

type ExpDate = { month: number; year: number };

export type AcademicExperience = {
  id: string;
  location: string;
  title: string;
  startDate: ExpDate;
  endDate: ExpDate;
  description: string;
};

export type CVData = {
  personalData: PersonalData;
  onlineProfiles: OnlineProfiles;
  professionalObjective: string;
  techs: Tech[];
  academicExps: AcademicExperience[];
};

export type CVAction =
  | {
      type: "SET_NAME";
      value: string;
    }
  | {
      type: "SET_LOCATION";
      value: string;
    }
  | {
      type: "SET_PHONE";
      value: string;
    }
  | {
      type: "SET_EMAIL";
      value: string;
    }
  | {
      type: "SET_PORTFOLIO_URL";
      value: string;
    }
  | {
      type: "SET_GITHUB_USERNAME";
      value: string;
    }
  | {
      type: "SET_LINKEDIN_USERNAME";
      value: string;
    }
  | {
      type: "SET_PROFESSIONAL_OBJECTIVE";
      value: string;
    }
  | {
      type: "ADD_TECH";
      value: string;
    }
  | {
      type: "REMOVE_TECH_BY_ID";
      value: string;
    }
  | {
      type: "ADD_ACADEMIC_EXP";
      value: AcademicExperience;
    };

const INITIAL_CV: CVData = {
  personalData: {
    name: "",
    location: "",
    phone: "",
    email: "",
  },
  onlineProfiles: {
    portfolioURL: "",
    gitHubUsername: "",
    linkedInUsername: "",
  },
  professionalObjective:
    "Busco oportunidades para aplicar e expandir meus conhecimentos em um ambiente desafiador e dinâmico. Tenho interesse em contribuir de maneira significativa para o sucesso da organização, utilizando minhas habilidades de [área de atuação] e minha experiência em [principais competências], com o intuito de promover inovação, eficiência e resultados positivos. Estou comprometido(a) com o desenvolvimento contínuo e o aprimoramento das minhas capacidades profissionais, sempre buscando o crescimento mútuo e a excelência no trabalho realizado.",
  techs: [],
  academicExps: [],
};

function cvReducer(state: CVData, action: CVAction) {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        personalData: { ...state.personalData, name: action.value },
      };
    case "SET_LOCATION":
      return {
        ...state,
        personalData: { ...state.personalData, location: action.value },
      };
    case "SET_PHONE":
      return {
        ...state,
        personalData: { ...state.personalData, phone: action.value },
      };
    case "SET_EMAIL":
      return {
        ...state,
        personalData: { ...state.personalData, email: action.value },
      };
    case "SET_PORTFOLIO_URL":
      return {
        ...state,
        onlineProfiles: { ...state.onlineProfiles, portfolioURL: action.value },
      };
    case "SET_GITHUB_USERNAME":
      return {
        ...state,
        onlineProfiles: {
          ...state.onlineProfiles,
          gitHubUsername: action.value,
        },
      };
    case "SET_LINKEDIN_USERNAME":
      return {
        ...state,
        onlineProfiles: {
          ...state.onlineProfiles,
          linkedInUsername: action.value,
        },
      };
    case "SET_PROFESSIONAL_OBJECTIVE":
      return {
        ...state,
        professionalObjective: action.value,
      };
    case "ADD_TECH":
      return {
        ...state,
        techs: [...state.techs, { id: uuid(), name: action.value }],
      };
    case "REMOVE_TECH_BY_ID":
      const updatedTechs = state.techs.filter((t) => t.id !== action.value);
      return { ...state, techs: updatedTechs };
    case "ADD_ACADEMIC_EXP":
      return {
        ...state,
        academicExps: [...state.academicExps, action.value],
      };
  }
}

export default function useCVReducer() {
  const [cvState, cvDispatch] = useReducer(cvReducer, INITIAL_CV);
  return { cvState, cvDispatch };
}
