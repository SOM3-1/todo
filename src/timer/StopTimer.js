
import { useState } from "react";

export default function App() {
  let [timer, setTimer] = useState(0);
  let [int, setInt] = useState(null);

  const timerUtility = () => {
    int = setInterval(() => {
      setTimer(++timer);
      console.log(int);
    }, 1000);
    setInt(int);
  };

  const onStart = () => {
    if(!int)
    timerUtility();

  };
 
  const onPause = () => {
    clearInterval(int);
    setInt(null)
  };

  const onReset = () => {
    clearInterval(int);
    setInt(null);
    setTimer(0);
  };

  return (
    <>
      <div>Display {timer}</div>

      <button onClick={onStart}> Start</button>
      <button onClick={onPause}> Pause</button>
      <button onClick={onStart}> Resume</button>
      <button onClick={onReset}> Reset</button>
    </>
  );
}
