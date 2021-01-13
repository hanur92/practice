import * as types from "./ActionTypes";

export const increment = (index) => ({
  type: types.INCREMENT,
  index,
});

export const decrement = (index) => ({
  type: types.DECREMENT,
  index,
});

export const setColor = (color, index) => ({
  type: types.SET_COLOR,
  index,
  color,
});

export const create = (color) => ({
  type: types.CREATE,
  color,
});

export const remove = () => ({
  type: types.REMOVE,
});

/*
    action 객체를 만드는 액션 생성자들을 선언합니다. (action creators)
    여기서 () => ({}) 은, function() { return { } } 와 동일한 의미입니다.
    scope 이슈와 관계 없이 편의상 사용되었습니다.
*/
