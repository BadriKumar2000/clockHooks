import { useEffect, useState } from "react";
import "./style.css";

const ClockHooks = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div className="bg-warning clock-container d-flex flex-column justify-content-center align-items-center mt-3">
      <h1>Clock</h1>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
};

export default ClockHooks;
