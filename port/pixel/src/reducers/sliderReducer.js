import { GET_INIT_STATE } from "../actions/types";

const initialState = {
  step: 100
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_INIT_STATE:
      return { ...state };

    default:
      return state;
  }
};
