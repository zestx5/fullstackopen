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
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content info={parts} />
      <Total sum={parts.reduce((prev, cur) => (prev += cur.exercises), 0)} />
    </div>
  );
};

export default App;
