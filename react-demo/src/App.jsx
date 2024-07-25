import "./App.css";
import { FAVE_LIST_ITEMS } from "./data/list-items/fave-list-items";
import { BAD_LIST_ITEMS } from "./data/list-items/bad-list-items";
import { ElementList } from "./components/element-list/ElementList";
import { useEffect, useState } from "react";
import { healthService } from "./services/healthService";

function App() {
  const faveList = FAVE_LIST_ITEMS;
  const badList = BAD_LIST_ITEMS;

  const [message, setMessage] = useState({});

  useEffect(() => {
    getHealthStatus();
  }, []);

  const getHealthStatus = async () => {
    const status = await healthService();
    setMessage(status);
  };

  return (
    <div>
      <h2 className="app-header">Welcome to my page</h2>
      <pre>{JSON.stringify(message, null, 2)}</pre>
      <div className="list-container">
        <ElementList
          header="this is my favorite list"
          itemsToList={faveList}
          styleName="fave-list"
        />
        <ElementList
          header="this is my bad list"
          itemsToList={badList}
          styleName="bad-list"
        />
      </div>
    </div>
  );
}

export default App;
