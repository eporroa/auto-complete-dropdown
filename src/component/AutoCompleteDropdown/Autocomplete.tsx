import { useEffect, type FC } from "react";
import { AutocompleteInput } from "./AutoCompleteInput";
import styles from "./style.module.scss";
import { AutocompleteProvider } from "./AutocompleteContext";

interface AutocompleteProps {
  data: string[];
}

const Autocomplete: FC<AutocompleteProps> = ({ data }: AutocompleteProps) => {
  useEffect(() => {
    console.log("data :>> ", data);
  }, [data]);

  return (
    <AutocompleteProvider>
      <div className={styles.autocomplete}>
        <AutocompleteInput />
      </div>
    </AutocompleteProvider>
  );
};

export default Autocomplete;
