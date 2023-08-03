import { useContext } from "react";
import { AutocompleteContext } from "../AutocompleteContext";

export const useAutocomplete = () => {
  const context = useContext(AutocompleteContext);
  if (context === undefined) {
    throw new Error(
      "useAutocomplete must be used within an AutocompleteProvider"
    );
  }
  return context;
};
