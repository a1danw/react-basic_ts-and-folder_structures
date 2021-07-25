import React, { FC, useState, ChangeEvent } from "react";
import { ITodo, EventType } from "../../Interfaces";
import getRandomId from "../helpers/ids";
import TodoItem from "./TodoItem";

export const TodosComponent: FC = () => {
  // const [todos, setTodos] = useState<ITodo[]>([]);
  const [todos, setTodos] = useState<Array<ITodo>>([]);
  const [form, setForm] = useState<ITodo>({});

  const onChange = (e: EventType) => {
    setForm((prev) => ({ ...form, description: e.target.value }));
  };

  const onSubmit = () => {
    if (form.description?.length) {
      const newTodo: ITodo = {
        description: form.description,
        id: getRandomId(),
      };
      setTodos((prev) => [...prev, newTodo]);
      setForm((prev) => ({ ...prev, description: "" }));
    }
  };

  const deleteItem = (itemToDelete: ITodo): void => {
    setTodos((prev) => prev.filter((item) => item.id !== itemToDelete.id));
  };

  const getTodoCount = (): number => {
    return todos.length;
  };

  return (
    <div className="container" style={{ width: 700 }}>
      <h4>Todo count</h4>
      <h4>{getTodoCount()}</h4>

      {todos.map(
        (item: ITodo): JSX.Element => (
          <TodoItem item={item} deleteItem={deleteItem} />
        )
      )}
      <div>
        <input
          type="text"
          className="form-control mt-4"
          placeholder="Enter a todo"
          onChange={onChange}
          value={form.description || ""}
        />
        <button
          onClick={onSubmit}
          type="submit"
          className="btn mt-4 btn-primary"
        >
          Add
        </button>
      </div>
    </div>
  );
};
