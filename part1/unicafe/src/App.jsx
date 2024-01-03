import { useState } from "react";

const Heading = ({ value }) => {
  return <h1>{value}</h1>;
};

const Statistics = ({ good, neutral, bad }) => {
  let all = good + bad + neutral;
  return (
    <>
      <Paragraph value={`good ${good}`} />
      <Paragraph value={`neutral ${neutral}`} />
      <Paragraph value={`bad ${bad}`} />
      <Paragraph value={`all ${all}`} />
      <Paragraph value={`average ${(good - bad) / all || 0}`} />
      <Paragraph value={`positive ${(good * 100) / all || 0}%`} />
    </>
  );
};

const Button = ({ value, onClickHandler }) => {
  return <button onClick={() => onClickHandler(value)}>{value}</button>;
};

const Paragraph = ({ value }) => {
  return <p>{value}</p>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickUpdateFeedback = (value) => {
    switch (value) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
    }
  };

  return (
    <>
      <Heading value={"give feedback"} />
      <Button value={"good"} onClickHandler={onClickUpdateFeedback} />
      <Button value={"neutral"} onClickHandler={onClickUpdateFeedback} />
      <Button value={"bad"} onClickHandler={onClickUpdateFeedback} />
      <Heading value={"statistics"} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  );
};

export default App;
