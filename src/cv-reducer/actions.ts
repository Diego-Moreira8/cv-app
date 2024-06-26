import { Experience, ExpType } from "./types";

type CVAction =
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
      type: "SET_IS_WHATSAPP";
      value: boolean;
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
      type: "ADD_EXPERIENCE";
      value: Experience;
      expType: ExpType;
    }
  | {
      type: "EDIT_EXPERIENCE";
      value: Experience;
      expType: ExpType;
    }
  | {
      type: "REMOVE_EXPERIENCE";
      value: string;
      expType: ExpType;
    };

export type { CVAction };
