// import { useEffect, useState } from "react";
import type { FC } from "react";

import { useAutocomplete } from "./hooks";

interface AutoCompleteListProps {}

const AutoCompleteList: FC<AutoCompleteListProps> = () => {
  const { searchText, filterData } = useAutocomplete();

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
      {filterData().map((item, index) => (
        <div key={index}>{highlightText(item, searchText)}</div>
      ))}
    </div>
  );
};

export default AutoCompleteList;
