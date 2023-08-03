import { useEffect, type FC } from "react";
import AutocompleteInput from "./AutoCompleteInput";
import styles from "./style.module.scss";
import { useAutocomplete } from "./hooks";

interface AutocompleteWrapperProps {
  data: string[];
}

const AutocompleteWrapper: FC<AutocompleteWrapperProps> = ({ data }) => {
  const { dataList, setDataList } = useAutocomplete();

  useEffect(() => {
    if (JSON.stringify(data) !== JSON.stringify(dataList)) {
      setDataList(data);
    }
  }, [data, setDataList, dataList]);

  return (
    <div className={styles.autocomplete}>
      <AutocompleteInput />
    </div>
  );
};

export default AutocompleteWrapper;
