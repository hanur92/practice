//! DUCKS? 기존 redux는 action/type reducer 셋을 따로 다룬다.
//! 가독성이 좋으나 수정시, 셋을 모두 수정해야하는 불편함이 있다.
//! ducks pattern은 reducer 파일 안에 action/type과 actionCreator를 모두 넣어 모듈화 관리한다.
//! 밑은 그 예시이다.

//ACTION
const LOAD = "xx/xx/LOAD";
const CREATE = "xx/xx/CREATE";
const UPDATE = "xx/xx/UPDATE";
const REMOVE = "xx/xx/REMOVE";
const types = "/xxx/xx/action";

//REDUCER
//!반드시 export default로 보내야한다.
export default function reducer(state = {}, action = {}) {
  switch (action.types) {
    case types.CREATE:
      return state.set();
    case types.REMOVE:
      return state.set();
    case types.UPDATE:
      return state.set();
    default:
      return state;
  }
}

//Action Creators
//!반드시 export로 보내야한다.
export function loadWidgets(widget) {
  return { type: LOAD };
}

export function createWidgets(widget) {
  return { type: CREATE, widget };
}

export function updateWidgets(widget) {
  return { type: UPDATE, widget };
}

export function removeWidgets(widget) {
  return { type: REMOVE, widget };
}
