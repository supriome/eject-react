import React, { useState, useEffect } from "react";
// import LoginControl from './LoginControl';
import FormikForm from "./FormikForm";

import "./App.css";

function Clock({ date }) {
  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function App() {
  const [seconds, setSeconds] = useState(0);
  // const [toggle, setToggle] = useState(true);

  const tick = () => {
    setSeconds(seconds + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line
  }, [seconds]);
  return (
    <div className="App">
      <header className="App-header">
        <Clock date={new Date()} />
        <FormikForm />
        {/* <MarkdownEditor /> */}
        {/* <Todo /> */}
        {/* <Rfce />
				{/* <p>toggle: {toggle.toString()}</p> */}
      </header>
    </div>
  );
}

export default App;
