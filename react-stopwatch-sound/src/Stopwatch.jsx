import React, { useState, useEffect, useRef } from 'react';

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [targetTime, setTargetTime] = useState(10);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [running]);

  useEffect(() => {
    if (seconds === targetTime) {
      const audio = new Audio("https://www.soundjay.com/button/beep-07.mp3");
      audio.play().catch(() => console.log("Beep! Time reached!"));
    }
  }, [seconds, targetTime]);

  const handleReset = () => {
    setRunning(false);
    setSeconds(0);
    clearInterval(intervalRef.current);
  };

  return (
    <div style={styles.container}>
      <h2>Stopwatch</h2>
      <p>Elapsed Time: {seconds} seconds</p>

      <input
        type="number"
        value={targetTime}
        onChange={(e) => setTargetTime(Number(e.target.value))}
        placeholder="Set target time (sec)"
        style={styles.input}
      />

      <div>
        <button onClick={() => setRunning(true)} style={styles.button}>Start</button>
        <button onClick={() => setRunning(false)} style={styles.button}>Stop</button>
        <button onClick={handleReset} style={styles.button}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  input: {
    padding: '8px',
    margin: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    margin: '5px',
    padding: '10px 16px',
    borderRadius: '5px',
    border: 'none',
    background: '#1976d2',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Stopwatch;
