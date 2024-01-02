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
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content info={course.parts} />
      <Total
        sum={course.parts.reduce((prev, cur) => (prev += cur.exercises), 0)}
      />
    </div>
  );
};

export default App;
