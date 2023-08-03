import { createContext, useEffect, useReducer } from "react";
import type { FC, ReactNode } from "react";

type IAction =
  | { type: "SET_SEARCH_TEXT"; payload: string }
  | { type: "SET_DATA_LIST"; payload: string[] };

interface IState {
  searchText: string;
  dataList: string[];
  setSearchText: (value: string) => void;
  setDataList: (value: string[]) => void;
  filterData: () => string[];
}

interface AutocompleteProviderProps {
  children: ReactNode;
  data: string[];
}

const initialState: IState = {
  searchText: "",
  dataList: [],
  setSearchText: () => {},
  setDataList: () => {},
  filterData: () => [],
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
  data,
}) => {
  const [state, dispatch] = useReducer(autocompleteReducer, initialState);

  const setSearchText = (value: string) =>
    dispatch({ type: "SET_SEARCH_TEXT", payload: value });

  const setDataList = (value: string[]) =>
    dispatch({ type: "SET_DATA_LIST", payload: value });

  const filterData = () => {
    return state.dataList.filter((item) =>
      item.toLowerCase().includes(state.searchText.toLowerCase())
    );
  };

  useEffect(() => {
    setDataList(data);

    return () => {
      setDataList([]);
    };
  }, [data]);

  return (
    <AutocompleteContext.Provider
      value={{
        ...state,
        setSearchText,
        setDataList,
        filterData,
      }}
    >
      {children}
    </AutocompleteContext.Provider>
  );
};
