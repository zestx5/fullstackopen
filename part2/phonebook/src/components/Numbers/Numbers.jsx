function Numbers({ numberList }) {
  return (
    <div>
      {numberList.map((n, idx) => (
        <p key={n.name[0] + idx}>
          {n.name} {n.number}
        </p>
      ))}
    </div>
  );
}

export default Numbers;
