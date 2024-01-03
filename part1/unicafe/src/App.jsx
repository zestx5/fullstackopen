import { useState } from "react";

const Heading = ({ value }) => {
  return <h1>{value}</h1>;
};

const Statistics = ({ good, neutral, bad }) => {
  let all = good + bad + neutral;
  if (all) {
    return (
      <table>
        <thead>
          <tr>
            <th>Stats</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Paragraph value={`good`} />
            </td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>
              <Paragraph value={`neutral`} />
            </td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>
              <Paragraph value={`bad`} />
            </td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>
              <Paragraph value={`all`} />
            </td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>
              <Paragraph value={`average`} />
            </td>
            <td>{((good - bad) / all).toFixed(1) || 0}</td>
          </tr>
          <tr>
            <td>
              <Paragraph value={`positive`} />
            </td>
            <td>{((good * 100) / all).toFixed(1) || 0}%</td>
          </tr>
        </tbody>
      </table>
    );
  }
  return <Paragraph value={"No feedback given"} />;
};

const Button = ({ value, onClickHandler }) => {
  return <button onClick={() => onClickHandler(value)}>{value}</button>;
};

const Paragraph = ({ value }) => {
  return <div>{value}</div>;
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
