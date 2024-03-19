import PropTypes from "prop-types";

function TodoList({ mission, markedDone, markAsDone, undoItem, deleteItem }) {
  return (
    <div className="container d-flex align-items-center">
      {!markedDone ? (
        <button className="btn btn-success" onClick={markAsDone}>
          Done
        </button>
      ) : (
        <button className="btn btn-secondary" onClick={undoItem}>
          UnDo
        </button>
      )}
      <button
        className="btn btn-danger ms-2"
        style={{ marginRight: "20px" }}
        onClick={deleteItem}
      >
        Delete
      </button>
      <textarea
        className={`form-control w-75 ${
          markedDone ? "done" : "text-secondary"
        }`}
        placeholder="Leave a comment here"
        value={mission}
        disabled
        style={{ textDecoration: markedDone ? "line-through" : "none" }}
      />
    </div>
  );
}

TodoList.propTypes = {
  mission: PropTypes.string.isRequired,
  markedDone: PropTypes.bool.isRequired,
  markAsDone: PropTypes.func.isRequired,
  undoItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default TodoList;
