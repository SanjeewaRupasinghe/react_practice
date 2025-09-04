const SearchBar = ({ onChangeHandler, placeholder }) => {
  return (
    <div>
      <input
        placeholder={placeholder ?? "no placeholder"}
        onChange={onChangeHandler}
        type="search"
      />
    </div>
  );
};

export default SearchBar;
