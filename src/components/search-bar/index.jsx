import "./index.css";
const SearchBar = ({ type, placeholderText, value, setValue }) => {
  return (
    <div className="input-wrapper">
      <input type={type} placeholder={placeholderText} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};
export default SearchBar;
