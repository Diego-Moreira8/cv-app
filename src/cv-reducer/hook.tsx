import { ReactNode, createContext, useContext, useReducer } from "react";
import { MY_CV } from "./cvTemplates";
import { cvReducer } from "./reducer";
import { CVData } from "./types";
import { CVAction } from "./actions";

const CVStateContext = createContext<CVData | undefined>(undefined);
const CVDispatchContext = createContext<React.Dispatch<CVAction> | undefined>(
  undefined
);

function useCVReducer() {
  const [cvState, cvDispatch] = useReducer(cvReducer, MY_CV);
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
