import React from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../store/features/todoSlice";
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
          setItem({ ...item, item: e.target.value });
        }}
      />
      <button
        className="border rounded px-2 bg-blue-500 text-white"
        onClick={() => {
          console.log(item);
          if (item.id === 0) {
            dispatch(
              addTodo({
                ...item,
                id: Date.now(),
              })
            );
          } else {
            dispatch(editTodo(item));
          }
          setItem({
            id: 0,
            item: "",
            isCompleted: false,
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default InputComponent;
