import ClockHooks from "./components/clockHooks";

import "./App.css";
import { useState } from "react";

const App = () => {
  const [clock, setCLock] = useState(false);
  const toggleCLock = () => {
    setCLock(!clock);
  };
  return (
    <div className="d-flex justify-content-center flex-column align-items-center bg-dark main-container">
      <button className="btn btn-primary" onClick={toggleCLock}>
        {clock ? "Hide" : "Show"}
      </button>
      {clock ? <ClockHooks /> : null}
    </div>
  );
};

export default App;
