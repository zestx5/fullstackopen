import { useState } from "react";

const Heading = ({ value }) => {
  return <h1>{value}</h1>;
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
  const [all, setAll] = useState(good + bad + neutral);

  const onClickUpdateFeedback = (value) => {
    switch (value) {
      case "good":
        setGood(good + 1);
        setAll(all + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        setAll(all + 1);
        break;
      case "bad":
        setBad(bad + 1);
        setAll(all + 1);
    }
  };

  return (
    <>
      <Heading value={"give feedback"} />
      <Button value={"good"} onClickHandler={onClickUpdateFeedback} />
      <Button value={"neutral"} onClickHandler={onClickUpdateFeedback} />
      <Button value={"bad"} onClickHandler={onClickUpdateFeedback} />
      <Heading value={"statistics"} />
      <Paragraph value={`good ${good}`} />
      <Paragraph value={`neutral ${neutral}`} />
      <Paragraph value={`bad ${bad}`} />
      <Paragraph value={`all ${all}`} />
    </>
  );
};

export default App;
