import { ADD_TASK, DELETE_TASK } from "../actions/types";

const initialState = {
  tasks: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task, i) => i !== action.payload)
      };
    default:
      return state;
  }
}
