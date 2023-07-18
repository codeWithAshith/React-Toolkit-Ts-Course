import React, { useEffect } from "react";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { SetInputState } from "../interface/AppInterface";
import { getAllTodos } from "../store/features/todoSlice";

const ListComponent = ({ setItem }: SetInputState) => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todoReducer.todos);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div className="flex flex-col items-center w-2/4 my-10">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="border rounded flex flex-row items-center justify-between p-4 w-full mb-4"
        >
          <p>{todo.item}</p>
          <div className="flex flex-row gap-4">
            <div
              className="text-gray-900"
              onClick={() => {
                console.log(todo);
                setItem(todo);
              }}
            >
              <GrEdit />
            </div>
            <div
              className="text-red-500"
              onClick={() => {
                // dispatch(removeTodo(todo));
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
