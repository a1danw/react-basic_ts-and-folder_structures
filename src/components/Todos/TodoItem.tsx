import React from "react";
import { ITodo } from "../../Interfaces";

type TodoItemProps = {
  item: ITodo;
  deleteItem: (item: ITodo) => void;
};

const TodoItem = ({ item, deleteItem }: TodoItemProps): JSX.Element | null => {
  return (
    <>
      <div
        className="mt-4"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h5>{item.description}</h5>
        <button
          onClick={() => deleteItem(item)}
          type="submit"
          className="btn btn-info"
        >
          X
        </button>
      </div>
      <hr />
    </>
  );
};

export default TodoItem;
