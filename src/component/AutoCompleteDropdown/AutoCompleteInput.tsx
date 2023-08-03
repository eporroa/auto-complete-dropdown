// import { useEffect, useState } from "react";
import type { FC, ChangeEvent } from "react";

import { useAutocomplete } from "./hooks";

interface AutocompleteInputProps {}

const AutocompleteInput: FC<AutocompleteInputProps> = () => {
  const { searchText, setSearchText } = useAutocomplete();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={searchText} onChange={handleChange} />
    </div>
  );
};

export default AutocompleteInput;
