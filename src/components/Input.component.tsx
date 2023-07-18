import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/features/todoSlice";
import { InputState } from "../interface/AppInterface";

const InputComponent = ({ item, setItem }: InputState) => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="Add Todo..."
        className="border px-2 mx-2 rounded"
        value={item?.item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button
        className="border rounded px-2 bg-blue-500 text-white"
        onClick={() => {
          dispatch(
            addTodo({
              // to fix duplicate id issue.
              id: Date.now(),
              item: item.item,
              isCompleted: false,
            })
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
