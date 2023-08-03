import { useContext } from "react";
import { AutocompleteContext } from "../AutocompleteContext";

export const useAutocomplete = () => {
  const context = useContext(AutocompleteContext);
  if (context === undefined) {
    throw new Error(
      "useAutocomplete must be used within an AutocompleteProvider"
    );
  }

  context.filterData = () => {
    return context.dataList.filter((item) =>
      item.toLowerCase().includes(context.searchText.toLowerCase())
    );
  };

  return context;
};
