import { type FC, useState, useRef, useEffect } from "react";
import AutocompleteInput from "./AutoCompleteInput";
import styles from "./style.module.scss";
import AutoCompleteList from "./AutoCompleteList";
import { AutocompleteProvider } from "./AutocompleteContext";

interface AutocompleteProps {
  data: string[];
  inputPlaceholder?: string;
}

const Autocomplete: FC<AutocompleteProps> = ({ inputPlaceholder, data }) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as HTMLElement)
    ) {
      setIsListOpen(false);
    }
  };

  const handleListSelect = () => {
    setIsListOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <AutocompleteProvider data={data}>
      <div className={styles.autocomplete} ref={containerRef}>
        <AutocompleteInput
          placeholder={inputPlaceholder}
          onFocus={() => {
            setIsListOpen(true);
          }}
        />
        {isListOpen && <AutoCompleteList onSelect={handleListSelect} />}
      </div>
    </AutocompleteProvider>
  );
};

export default Autocomplete;
