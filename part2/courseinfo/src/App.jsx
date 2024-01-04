import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Total from "./components/Total/Total";

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
