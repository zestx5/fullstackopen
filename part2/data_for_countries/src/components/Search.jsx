import PropTypes from "prop-types";

function Search({ value, onChangeHandler }) {
  return (
    <div>
      <label htmlFor="search-bar">Find country: </label>
      <input id="search-bar" value={value} onChange={onChangeHandler}></input>
    </div>
  );
}

Search.propTypes = {
  value: PropTypes.string,
  onChangeHandler: PropTypes.func,
};

export default Search;
