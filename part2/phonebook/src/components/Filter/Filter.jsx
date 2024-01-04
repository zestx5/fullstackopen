function Filter({ value, onChangeHandler }) {
  return (
    <div>
      <label htmlFor="filter">Find </label>
      <input type="text" id="filter" value={value} onChange={onChangeHandler} />
    </div>
  );
}

export default Filter;
