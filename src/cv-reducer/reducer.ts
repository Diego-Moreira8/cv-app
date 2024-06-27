import { v4 as uuid } from "uuid";
import { CVAction } from "./actions";
import { CVData, ExpType } from "./types";

function cvReducer(state: CVData, action: CVAction) {
  switch (action.type) {
    case "SET_NAME": {
      return {
        ...state,
        personalData: { ...state.personalData, name: action.value },
      };
    }
    case "SET_LOCATION": {
      return {
        ...state,
        personalData: { ...state.personalData, location: action.value },
      };
    }
    case "SET_PHONE": {
      return {
        ...state,
        personalData: {
          ...state.personalData,
          phone: { ...state.personalData.phone, number: action.value },
        },
      };
    }
    case "SET_IS_WHATSAPP": {
      return {
        ...state,
        personalData: {
          ...state.personalData,
          phone: { ...state.personalData.phone, isWhatsApp: action.value },
        },
      };
    }
    case "SET_EMAIL": {
      return {
        ...state,
        personalData: { ...state.personalData, email: action.value },
      };
    }
    case "SET_PORTFOLIO_URL": {
      return {
        ...state,
        onlineProfiles: { ...state.onlineProfiles, portfolioURL: action.value },
      };
    }
    case "SET_GITHUB_USERNAME": {
      return {
        ...state,
        onlineProfiles: {
          ...state.onlineProfiles,
          gitHubURL: action.value,
        },
      };
    }
    case "SET_LINKEDIN_USERNAME": {
      return {
        ...state,
        onlineProfiles: {
          ...state.onlineProfiles,
          linkedInURL: action.value,
        },
      };
    }
    case "SET_PROFESSIONAL_OBJECTIVE": {
      return {
        ...state,
        professionalObjective: action.value,
      };
    }
    case "ADD_TECH": {
      const updatedTechs = {
        ...state,
        techs: [...state.techs, { id: uuid(), name: action.value }],
      };

      updatedTechs.techs.sort((a, b) => {
        const techA = a.name.toUpperCase();
        const techB = b.name.toUpperCase();

        if (techA < techB) return -1;
        if (techA > techB) return 1;
        return 0;
      });

      return updatedTechs;
    }
    case "REMOVE_TECH_BY_ID": {
      const updatedTechs = state.techs.filter((t) => t.id !== action.value);
      return { ...state, techs: updatedTechs };
    }
    case "ADD_EXPERIENCE": {
      const expTypeKey =
        action.expType === ExpType.Academic
          ? "academicExps"
          : "professionalExps";

      return {
        ...state,
        [expTypeKey]: [...state[expTypeKey], action.value],
      };
    }
    case "EDIT_EXPERIENCE": {
      const expTypeKey =
        action.expType === ExpType.Academic
          ? "academicExps"
          : "professionalExps";

      const updatedExps = state[expTypeKey].map((exp) =>
        exp.id === action.value.id ? action.value : exp
      );

      return {
        ...state,
        [expTypeKey]: updatedExps,
      };
    }
    case "REMOVE_EXPERIENCE": {
      const expTypeKey =
        action.expType === ExpType.Academic
          ? "academicExps"
          : "professionalExps";

      const updatedExps = state[expTypeKey].filter(
        (exp) => exp.id !== action.value
      );

      return { ...state, [expTypeKey]: updatedExps };
    }
  }
}
export { cvReducer };
