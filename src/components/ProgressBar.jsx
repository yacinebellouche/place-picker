import { useState, useEffect } from "react";
export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const remainingInterval = setInterval(() => {
      console.log("Interval");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(remainingInterval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
