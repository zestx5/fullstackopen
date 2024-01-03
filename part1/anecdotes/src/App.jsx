import { useState } from "react";

const Button = ({ onClickHandler, value }) => {
  return (
    <div>
      <button onClick={onClickHandler}>{value}</button>
    </div>
  );
};

const Heading = ({ text }) => {
  return <h1>{text}</h1>;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });

  const [selected, setSelected] = useState(0);

  const onClickUpdateJoke = () => {
    setSelected(getRandomInt(anecdotes.length));
  };

  const onClickVoteForJoke = () => {
    setPoints({ ...points, [selected]: points[selected] + 1 });
  };

  const getMaxVotes = () => {
    let max = 0;
    let idx = 0;

    for (const key in points) {
      if (Object.hasOwnProperty.call(points, key)) {
        const element = points[key];
        if (max < element) {
          max = element;
          idx = key;
        }
      }
    }
    return idx;
  };

  return (
    <div>
      <div>
        <Heading text={"Anecdote of the day"} />
        <p>{anecdotes[selected]}</p>
        <p>has {points[selected]} votes</p>
        <Button value={"hello cracker"} onClickHandler={onClickUpdateJoke} />
        <Button value={"sick joke bro"} onClickHandler={onClickVoteForJoke} />
      </div>
      <div>
        <Heading text={"Anecdote with most votes"} />
        <p>{anecdotes[getMaxVotes()]}</p>
      </div>
    </div>
  );
};

export default App;
