import { useReducer } from "react";
import { MY_CV } from "./cvTemplates";
import { cvReducer } from "./reducer";

function useCVReducer() {
  const [cvState, cvDispatch] = useReducer(cvReducer, MY_CV);
  return { cvState, cvDispatch };
}

export { useCVReducer };
