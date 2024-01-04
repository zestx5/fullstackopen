import Content from "../Content/Content";
import Total from "../Total/Total";
import Header from "../Header/Header";

function Course({ course }) {
  return (
    <div>
      <Header course={course.name} />
      <Content info={course.parts} />
      <Total
        sum={course.parts.reduce((prev, cur) => (prev += cur.exercises), 0)}
      />
    </div>
  );
}

export default Course;
