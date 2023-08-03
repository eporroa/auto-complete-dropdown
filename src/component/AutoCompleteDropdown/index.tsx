import { type FC } from "react";

import { AutocompleteProvider } from "./AutocompleteContext";
import AutocompleteWrapper from "./AutocompleteWrapper";

interface AutocompleteProps {
  data: string[];
}

const Autocomplete: FC<AutocompleteProps> = ({ data }) => {
  return (
    <AutocompleteProvider>
      <AutocompleteWrapper data={data} />
    </AutocompleteProvider>
  );
};

export default Autocomplete;
