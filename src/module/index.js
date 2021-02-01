import { createAction, handleActions } from "redux-actions";

import { Map, List } from "immutable";

const CREATE = "counter/CREATE";
const REMOVE = "counter/REMOVE";
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";
const SET_COLOR = "counter/SET_COLOR";
//actionCreator만들기
export const create = createAction(CREATE); //index
export const remove = createAction(REMOVE); //index
export const increment = createAction(INCREMENT); //index
export const decrement = createAction(DECREMENT); //index
export const set_color = createAction(SET_COLOR); //{index , color}

const initialState = Map({
  counter: List([
    Map({
      color: "black",
      number: 0,
    }),
  ]),
});

export default handleActions(
  {
    //prefix로 인해 [action]으로 해주어야한다.
    [CREATE]: (state, action) => {
      const counters = state.get("counters");
      return counters.set(
        "counters",
        counters.push(
          Map({
            color: action.payload,
            number: 0,
          })
        )
      );
    },
    [REMOVE]: (state, action) => {
      const counters = state.get("counters");
      return counters.set("counters", counters.pop());
    },
    [INCREMENT]: (state, action) => {
      const counters = state.get("counters");
      return counters.set(
        "counters",
        counters.update(action.payload, (counter) =>
          counter.set("number", counter.get("number") + 1)
        )
      );
    },
    [DECREMENT]: (state, action) => {
      const counters = state.get("counters");
      return counters.set(
        "counters",
        counters.update(action.payload, (counter) =>
          counter.set("number", counter.get("number") - 1)
        )
      );
    },
    [SET_COLOR]: (state, action) => {
      const counters = state.get("counters");
      return counters.set(
        "counters",
        counters.update(action.payload.index, (counter) =>
          counter.set("color", action.payload.color)
        )
      );
    },
  },
  initialState
);

//caution ; handleAction(단일 액션 핸들링) / handleActions(여러 액션 핸들링)
