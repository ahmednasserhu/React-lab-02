import { useState } from "react";
import PropTypes from "prop-types";

function TodoForm({ addItem }) {
  const [itemToCommit, setItemToCommit] = useState("");

  const handleChange = (event) => {
    setItemToCommit(event.target.value);
  };

  const sendItem = () => {
    addItem(itemToCommit);
    setItemToCommit("");
  };

  return (
    <div className="container d-flex justify-content-center mt-2 align-items-start mb-5">
      <div
        className="input-group"
        style={{
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <span className="input-group-text fw-bolder block">
          BE productive write your upcoming work here!
        </span>
        <textarea
          className="form-control w-100"
          aria-label="With textarea"
          value={itemToCommit}
          onChange={handleChange}
        ></textarea>
        <button
          type="button"
          className="btn btn-primary mt-2 ms-auto"
          onClick={sendItem}
          disabled={!itemToCommit.trim()}
        >
          Add
        </button>
      </div>
    </div>
  );
}

TodoForm.propTypes = {
  addItem: PropTypes.func.isRequired,
}

export default TodoForm;