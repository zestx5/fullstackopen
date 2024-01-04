import Part from "./Part/Part";

const Content = ({ info }) => {
  return (
    <div>
      {info.map((p, i) => (
        <Part key={p.name[0] + i} part={p.name} exercises={p.exercises} />
      ))}
    </div>
  );
};

export default Content;
