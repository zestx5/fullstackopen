function Form({ onClickHandler, value, onChangeHandler }) {
  return (
    <form>
      <div>
        <label htmlFor="name">name: </label>
        <input value={value} onChange={onChangeHandler} id="name" />
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
