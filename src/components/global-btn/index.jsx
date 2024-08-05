import "./index.css";
const MainBtn = ({ buttonTitle, onClick }) => {
  return (
    <div className="btn-wrapper">
      <button className="main-btn" onClick={onClick}>
        {buttonTitle}
      </button>
    </div>
  );
};
export default MainBtn;
