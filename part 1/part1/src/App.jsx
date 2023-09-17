import Header from "./components/Header/Header";
import { useState } from "react";
import Statistics from "./components/Statistics/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodBtnHandler = () => {
    setGood(good + 1);
  };
  const neutralBtnHandler = () => {
    setNeutral(neutral + 1);
  };

  const badBtnHandler = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Header course="give feedback"></Header>
      <div>
        <button onClick={goodBtnHandler}>good</button>
        <button onClick={neutralBtnHandler}>neutral</button>
        <button onClick={badBtnHandler}>bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
};

export default App;
