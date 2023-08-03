import { useEffect, useState } from "react";

import AutoCompleteDropdown from "./component/AutoCompleteDropdown";
import { fetchData } from "./services/local";

import "./App.css";

function App() {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchData();
      setData(data);
    };

    load();
  }, []);

  return (
    <div>
      <AutoCompleteDropdown data={data} />
    </div>
  );
}

export default App;
