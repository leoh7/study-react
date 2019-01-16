// action 객체를 만드는 액션 생성 함수들을 선언함(action creators)
// 여기에서 () => ({}) 는 function () { return {} } 와 동일함

import * as types from './ActionTypes';

export const increment = () => ({
  type: types.INCREMENT
});

export const decrement = () => ({
  type: types.DECREMENT
});

export const setColor = (color) => ({
  type: types.SET_COLOR,
  color
});