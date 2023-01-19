import { createContext, useContext, useReducer } from "react";
import { StateType, ActionType } from "./reducer";

interface StateInterface {
  reducer: React.Reducer<StateType, ActionType>;
  initialState: StateType;
  children: JSX.Element;
}

export type ContextValue = [StateType, React.Dispatch<ActionType>];

 const StateContext = createContext<ContextValue | null>(null);

export const StateProvider: React.FC<StateInterface> = ({
  reducer,
  initialState,
  children,
}): JSX.Element => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
