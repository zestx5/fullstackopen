function Form({
  onClickHandler,
  nameValue,
  numberValue,
  onNameChangeHandler,
  onNumberChangeHandler,
}) {
  return (
    <form>
      <div>
        <label htmlFor="name">name: </label>
        <input value={nameValue} onChange={onNameChangeHandler} id="name" />
      </div>
      <div>
        <label htmlFor="number">number: </label>
        <input
          value={numberValue}
          onChange={onNumberChangeHandler}
          id="number"
        />
      </div>
      <div>
        <button onClick={onClickHandler} type="submit">
          add
        </button>
      </div>
    </form>
  );
}

export default Form;
