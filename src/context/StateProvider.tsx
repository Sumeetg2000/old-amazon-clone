import { createContext, useContext, useReducer } from "react";
import { StateType, ActionType } from "./reducer";

interface StateInterface {
  reducer: React.Reducer<StateType, ActionType>;
  initialState: StateType;
  children: JSX.Element;
}

export const StateContext = createContext<any>(null);

export const StateProvider = ({
  reducer,
  initialState,
  children,
}: StateInterface) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
