import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addTodo } from "../store/features/todoSlice";

const InputComponent = () => {
  const [item, setItem] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todoReducer.todos);

  return (
    <div>
      <input
        type="text"
        placeholder="Add Todo..."
        className="border px-2 mx-2 rounded"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button
        className="border rounded px-2 bg-blue-500 text-white"
        onClick={() => {
          dispatch(
            addTodo({ id: todos.length + 1, item: item, isCompleted: false })
          );
          setItem("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default InputComponent;
