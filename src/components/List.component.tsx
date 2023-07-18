import React from "react";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { removeTodo } from "../store/features/todoSlice";

const ListComponent = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todoReducer.todos);

  return (
    <div className="flex flex-col items-center w-2/4 my-10">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="border rounded flex flex-row items-center justify-between p-4 w-full mb-4"
        >
          <p>{todo.item}</p>
          <div className="flex flex-row gap-4">
            <div className="text-gray-900">
              <GrEdit />
            </div>
            <div
              className="text-red-500"
              onClick={() => {
                dispatch(removeTodo(todo));
              }}
            >
              <RiDeleteBin6Line />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListComponent;
