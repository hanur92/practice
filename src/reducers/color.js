import * as types from "../actions/ActionTypes";

const initialState = { color: "black" };

const color = (state = initialState, action) => {
  switch (action.types) {
    case types.SET_COLOR:
      return {
        color: state.color,
      };
    default:
      return state;
  }
};

export default color;
