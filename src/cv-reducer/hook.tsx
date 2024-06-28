import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { EMPTY_CV } from "./cvTemplates";
import { cvReducer } from "./reducer";
import { CVData } from "./types";
import { CVAction } from "./actions";

const CVStateContext = createContext<CVData | undefined>(undefined);
const CVDispatchContext = createContext<React.Dispatch<CVAction> | undefined>(
  undefined
);

function useCVReducer() {
  const storedCV = localStorage.getItem("userCV");
  const initialState = storedCV ? JSON.parse(storedCV) : EMPTY_CV;
  const [cvState, cvDispatch] = useReducer(cvReducer, initialState);

  useEffect(() => {
    localStorage.setItem("userCV", JSON.stringify(cvState));
  }, [cvState]);

  return { cvState, cvDispatch };
}

function CVProvider({ children }: { children: ReactNode }) {
  const { cvDispatch, cvState } = useCVReducer();

  return (
    <CVStateContext.Provider value={cvState}>
      <CVDispatchContext.Provider value={cvDispatch}>
        {children}
      </CVDispatchContext.Provider>
    </CVStateContext.Provider>
  );
}

function useCVState() {
  const context = useContext(CVStateContext);
  if (context === undefined) {
    throw new Error("useCVState must be used within a CVProvider");
  }
  return context;
}

function useCVDispatch() {
  const context = useContext(CVDispatchContext);
  if (context === undefined) {
    throw new Error("useCVDispatch must be used within a CVProvider");
  }
  return context;
}

export { CVProvider, useCVState, useCVDispatch };
