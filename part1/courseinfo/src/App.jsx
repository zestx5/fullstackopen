const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = ({ info }) => {
  return (
    <div>
      {info.map((p) => (
        <Part part={p.name} exercises={p.exercises} />
      ))}
    </div>
  );
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Total = ({ sum }) => {
  return <p>Number of exercises {sum}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content info={[part1, part2, part3]} />
      <Total sum={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

export default App;
