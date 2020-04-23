import { createContext, useReducer, useContext } from 'react';
import { appReducer, createActions } from './AppReducer';

// Initial state
const initialState = {
  todaySummary: {},
  timelineData: [],
  announcements: [],
  casesSummary: {},
};

// Create context
let GlobalContext = null;

// Provider component
export const InitialGlobalState = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const actions = createActions(dispatch);
  GlobalContext = createContext({
    data: state,
    actions,
  });
};

/** Get application domains fromt the context */
export const useGlobalStateContext = () => useContext(GlobalContext);

export default InitialGlobalState;
