// import { useEffect, useState } from "react";
import type { FC } from "react";

import styles from "./style.module.scss";
import { useAutocomplete } from "./AutocompleteHooks";

interface AutoCompleteListProps {
  onSelect?: (value: string) => void;
}

const AutoCompleteList: FC<AutoCompleteListProps> = ({ onSelect }) => {
  const { searchText, filterData, setSearchText } = useAutocomplete();
  const filteredList = filterData();

  const highlightText = (text: string, match: string) => {
    const parts = text.split(new RegExp(`(${match})`, "gi"));
    return (
      <span className={styles.listItem}>
        {parts.map((part, i) =>
          part.toLowerCase() === match.toLowerCase() ? (
            <span key={i} className={styles.highlight}>
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
    filteredList.length > 0 && (
      <div className={styles.list}>
        {filteredList.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setSearchText(item);
              onSelect && onSelect(item);
            }}
          >
            {highlightText(item, searchText)}
          </div>
        ))}
      </div>
    )
  );
};

export default AutoCompleteList;
