function Numbers({ numberList, onClickDeleteHandler }) {
  return (
    <div>
      {numberList.map((n, idx) => {
        return (
          <p key={n.name[0] + idx}>
            {n.name} {n.number}{" "}
            <button onClick={() => onClickDeleteHandler(n.id)}>delete</button>
          </p>
        );
      })}
    </div>
  );
}

export default Numbers;
