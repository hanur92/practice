// import color from "./color2";
// import number from "./number2";
// import { combineReducers } from "redux";
// /*
//     서브 리듀서들을 하나로 합칩니다.
//     combineReducers 를 실행하고 나면, 나중에 store의 형태가 파라미터로 전달한 객체의 모양대로 만들어집니다.
//     지금의 경우:
//     {
//         numberData: {
//             number: 0
//         },
//         colorData: {
//             color: 'black'
//         }
//     }
//     로 만들어집니다.
// */

// const reducers = combineReducers({
//   numberData: number,
//   colorData: color,
// });

// /*
//     리듀서 함수를 정의합니다. 리듀서는 state 와 action 을 파라미터로 받습니다.
//     state 가 undefined 일때 (스토어가 생성될때) state 의 기본값을 initialState 로 사용합니다.
//     action.type 에 따라 다른 작업을 하고, 새 상태를 만들어서 반환합니다.
//     이 때 주의 할 점은 state 를 직접 수정하면 안되고,
//     기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야합니다.
// */

// export default reducers;

import * as types from "../actions/ActionTypes";

const initialState = {
  counters: [
    {
      color: "black",
      number: 0,
    },
  ],
};

function counter(state = initialState, action) {
  const counters = state.counters;
  switch (action.type) {
    case types.CREATE:
      return { counters: [...counters, { color: action.color, number: 0 }] };
    case types.REMOVE:
      return { counters: counters.slice(0, counters.length - 1) };
    case types.INCREMENT:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            number: counters[action.index].number + 1,
          },
          ...counters.slice(action.index + 1, counters.length),
        ],
      };
    case types.DECREMENT:
      return { counters: [] };
    default:
      return state;
  }
}

export default counter;
