import PropTypes from "prop-types";

export default function Cell({ isAlive, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: "20px",
        height: "20px",
        border: "1px solid #ccc",
        backgroundColor: "black",
      }}
    ></div>
  );
}

Cell.propTypes = {
  isAlive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
