"use client";
import {
  Dispatch,
  createContext,
  useContext,
  useReducer,
  ReactNode,
} from "react";

interface LeonConfigContextParams {
  completedFirstStep: boolean;
  completedSecondStep: boolean;
  completedThirdStep: boolean;
  hasDoneAllSteps: boolean;
}

const initialState: LeonConfigContextParams = {
  completedFirstStep: false,
  completedSecondStep: false,
  completedThirdStep: false,
  hasDoneAllSteps: false,
};

type Action =
  | { type: "SET_COMPLETED_FIRST_STEP"; payload: boolean }
  | { type: "SET_COMPLETED_SECOND_STEP"; payload: boolean }
  | { type: "SET_COMPLETED_THIRD_STEP"; payload: boolean }
  | { type: "SET_HAS_DONE_ALL_STEPS"; payload: boolean };

function leonConfigReducer(
  state: LeonConfigContextParams,
  action: Action
): LeonConfigContextParams {
  switch (action.type) {
    case "SET_COMPLETED_FIRST_STEP":
      return { ...state, completedFirstStep: action.payload };
    case "SET_COMPLETED_SECOND_STEP":
      return { ...state, completedSecondStep: action.payload };
    case "SET_COMPLETED_THIRD_STEP":
      return { ...state, completedThirdStep: action.payload };
    case "SET_HAS_DONE_ALL_STEPS":
      return { ...state, hasDoneAllSteps: action.payload };
    default:
      return state;
  }
}

const LeonConfigContext = createContext<LeonConfigContextParams>(initialState);

interface LeonConfigDispatchParams {
  dispatch: Dispatch<Action>;
}

const LeonConfigDispatch = createContext<LeonConfigDispatchParams>({
  dispatch: () => {},
});

export function useLeonConfigContext() {
  return useContext(LeonConfigContext);
}

export function useLeonConfigDispatch() {
  return useContext(LeonConfigDispatch);
}

export function LeonConfigProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(leonConfigReducer, initialState);

  return (
    <LeonConfigContext.Provider value={state}>
      <LeonConfigDispatch.Provider value={{ dispatch }}>
        {children}
      </LeonConfigDispatch.Provider>
    </LeonConfigContext.Provider>
  );
}
