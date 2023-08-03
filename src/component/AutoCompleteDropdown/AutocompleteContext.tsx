import { createContext, useReducer } from "react";
import type { FC, ReactNode } from "react";

type IAction =
  | { type: "SET_SEARCH_TEXT"; payload: string }
  | { type: "SET_DATA_LIST"; payload: string[] };

interface IState {
  searchText: string;
  dataList: string[];
  setSearchText: (value: string) => void;
  setDataList: (value: string[]) => void;
}

interface AutocompleteProviderProps {
  children: ReactNode;
}

const initialState: IState = {
  searchText: "",
  dataList: [],
  setSearchText: () => {},
  setDataList: () => {},
};

export const AutocompleteContext = createContext<IState>(initialState);

const autocompleteReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "SET_SEARCH_TEXT":
      return { ...state, searchText: action.payload };
    case "SET_DATA_LIST":
      return { ...state, dataList: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
};

export const AutocompleteProvider: FC<AutocompleteProviderProps> = ({
  children,
}: AutocompleteProviderProps) => {
  const [state, dispatch] = useReducer(autocompleteReducer, initialState);

  const setSearchText = (value: string) =>
    dispatch({ type: "SET_SEARCH_TEXT", payload: value });

  const setDataList = (value: string[]) =>
    dispatch({ type: "SET_DATA_LIST", payload: value });

  return (
    <AutocompleteContext.Provider
      value={{
        ...state,
        setSearchText,
        setDataList,
      }}
    >
      {children}
    </AutocompleteContext.Provider>
  );
};
