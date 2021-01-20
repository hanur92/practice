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
    { color: "black", number: 0 },
    { color: "black", number: 1 },
    { color: "black", number: 2 },
    { color: "black", number: 3 },
    { color: "black", number: 4 },
    { color: "black", number: 5 },
  ],
};

function counter(state = initialState, action) {
  const counters = state.counters;
  // const { counters } = state;
  console.log({
    //action.index = 5
    counters: [
      ...counters.slice(0, 5), //선택인덱스 직전까지 슬라이스
      { ...counters[5], number: counters[5].number + 1 },
      //
      // ...counters.slice(6, counters.length),
    ],
  });
  console.log({
    counters: [
      ...counters.slice(0, 5),
      { ...counters[5], number: counters[5].number + 1 },
    ],
  });
  console.log("0", {});
  console.log("1", { counters });
  console.log("2", { counters: counters });
  console.log("3", { counters: [...counters] });
  console.log("4", { counters: [...counters.slice(0, 5)] });
  console.log("5", {
    counters: [...counters.slice(0, 5), { ...counters[5] }],
  });
  console.log("6", {
    counters: [
      ...counters.slice(0, 5),
      { ...counters[5], number: counters[5].number + 1 },
    ],
  });
  console.log({
    //action.index = 3
    counters: [
      ...counters.slice(0, 3), //선택인덱스 직전까지 자름
      { ...counters[3], number: counters[3].number + 1 },
      //목표인덱스를 잘라주고 숫자 1을 증가시켜줌
      ...counters.slice(4, counters.length),
      //목표인덱스 이후부터 counters배열의 끝(counters.length)까지 잘라줌
    ],
  });
  //             {counters: [...counters.slice(0, action.index),{...counters[action.index],
  // number: counters[action.index].number + 1,},...counters.slice(action.index + 1, counters.length)],
  // };

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
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            number: counters[action.index].number - 1,
          },
          ...counters.slice(action.index + 1, counters.length),
        ],
      };
    case types.SET_COLOR:
      return {
        counters: [
          ...counters.slice(0, action.index),
          { ...counters[action.index], color: action.color },
          ...counters.slice(action.index + 1, counters.length),
        ],
      };

    default:
      return state;
  }
}

export default counter;
//
