// import { useEffect, useState } from "react";
import type { FC, ChangeEvent } from "react";

import { useAutocomplete } from "./AutocompleteHooks";

interface AutocompleteInputProps {
  placeholder?: string;
  onFocus: (event: HTMLElement) => void;
}

const AutocompleteInput: FC<AutocompleteInputProps> = ({
  placeholder,
  onFocus,
}) => {
  const { searchText, setSearchText } = useAutocomplete();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <input
        placeholder={placeholder}
        type="text"
        value={searchText}
        onChange={handleChange}
        onFocus={(e) => onFocus(e.target)}
      />
    </div>
  );
};

export default AutocompleteInput;
