//!redux_action? redux에서 action 생성시 번거로움을 줄여준다.
//!사용예시

import { create } from "../actions";

//!기존 리덕스 액션 생성

export const increment = (index) => ({
  type: Types.INCREMENT,
  index,
});
export const decrement = (index) => ({
  type: Types.DECREMENT,
  index,
});

//!리덕스_액션 방식 생성
export const increment2 = createAction(types.INCREMENT);
export const decrement2 = createAction(types.DECREMENT);
export const setColor = createAction(types.SET_COLOR);
// 하지만, 이런식으로 하면 그 파라미터의 값이 index 가 될 지 뭐가 될 지 모른다.
// 그렇기 때문에, 파라미터로 전달받은 값을 액션의 payload 값으로 설정해준다.
// 따라서 increment(3) 가 실행된다면, 다음과 같이 객체를 만들어준다.
{
    type: 'INCREMENT',
    payload: 5
};
setColor({index: 5, color: '#fff'})
/* 결과:
{
    type: 'SET_COLOR',
    payload: {
        index: 5,
        color: '#fff'
    }
}
*/