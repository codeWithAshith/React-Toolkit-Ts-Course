import axios from "../utils/config";
import { Todo } from "../interface/AppInterface";

const apiModules = {
  getAllTodo: () => axios.get("/todos"),
  postTodo: (todo: Todo) => axios.post("/todos", todo),
  updateTodo: (todo: Todo) => axios.put(`/todos/${todo.id}`, todo),
  deleteTodo: (id: number) => axios.delete(`/todos/${id}`),
};

export default apiModules;
