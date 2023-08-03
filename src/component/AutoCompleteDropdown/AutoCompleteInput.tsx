// import { useEffect, useState } from "react";
import type { FC, ChangeEvent } from "react";

import { useAutocomplete } from "./hooks";

interface AutocompleteInputProps {}

export const AutocompleteInput: FC<AutocompleteInputProps> = () => {
  const { searchText, setSearchText } = useAutocomplete();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filterData = (text: string) => {
    return data.filter((item) =>
      item.toLowerCase().includes(text.toLowerCase())
    );
  };

  const highlightText = (text: string, match: string) => {
    const parts = text.split(new RegExp(`(${match})`, "gi"));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === match.toLowerCase() ? (
            <span key={i} style={{ backgroundColor: "yellow" }}>
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </span>
    );
  };

  return (
    <div>
      <input type="text" value={searchText} onChange={handleChange} />
      {filterData(searchText).map((item, index) => (
        <div key={index}>{highlightText(item, searchText)}</div>
      ))}
    </div>
  );
};
