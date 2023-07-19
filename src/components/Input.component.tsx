import React from "react";
// import { addTodo, editTodo } from "../store/features/todoSlice";
import { InputState } from "../interface/AppInterface";
import { addTodo, updateTodo } from "../store/features/todoSlice";
import { useAppDispatch } from "../store/store";

const InputComponent = ({ item, setItem }: InputState) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="Add Todo..."
        className="border px-2 mx-2 rounded"
        value={item?.item}
        onChange={(e) => {
          setItem({ ...item, item: e.target.value });
        }}
      />
      <button
        className="border rounded px-2 bg-blue-500 text-white"
        onClick={() => {
          if (item.id === 0) {
            dispatch(
              addTodo({
                ...item,
                id: Date.now(),
              })
            );
          } else {
            dispatch(updateTodo(item));
          }
          setItem({
            id: 0,
            item: "",
            isCompleted: false,
          });
        }}
      >
        {item.id === 0 ? "Add Todo" : "Edit Todo"}
      </button>
    </div>
  );
};

export default InputComponent;
