import {
  ERROR_TODOS,
  GET_TODOS,
  SUCCESS_TODOS,
} from "../constants/todosConstants";

const initialTodos = {
  todos: [],
  isLoading: false,
  error: null,
};
const todosReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_TODOS:
      return {
        todos: action.payload,
        isLoading: false,
        error: null,
      };
    case ERROR_TODOS:
      return {
        todos: [],
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default todosReducer;
