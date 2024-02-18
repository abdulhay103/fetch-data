import axios from "axios";
import {
  ERROR_TODOS,
  GET_TODOS,
  SUCCESS_TODOS,
} from "../constants/todosConstants";

export const getTodos = async (dispatch) => {
  dispatch({ type: GET_TODOS });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch({ type: SUCCESS_TODOS, payload: res.data });
  } catch (error) {
    dispatch({ type: ERROR_TODOS, payload: error.message });
  }
};
