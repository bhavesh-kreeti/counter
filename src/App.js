import { useEffect, useRef, useState } from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [timerStage, setTimerStage] = useState('waiting');
  const timerRef = useRef();

  useEffect(() => {
    if (count > 0) {
      timerRef.current = setTimeout(() => {
        setCount(prev => prev + 1);
      }, 1000);
    }
  }, [count])

  const handleCounterClick = () => {
    if (timerStage === 'waiting') {
      setTimerStage('paused');
      setCount(prev => prev + 1);
    } else if (timerStage === 'paused') {
      clearTimeout(timerRef.current);
    }
  };

  const resetClickHandler = () => {
    clearTimeout(timerRef.current);
    setTimerStage('waiting')
    setCount(0);
  }

  return (
    <div className="container">
      <span className="counter">{count}</span>
      <button onClick={handleCounterClick} className="btn">{timerStage === 'waiting' ? 'Start' : 'Pause'}</button>
      <button onClick={resetClickHandler} className="btn reset">Reset</button>
    </div>
  );
}

export default App;
