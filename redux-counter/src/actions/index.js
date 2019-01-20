// action 객체를 만드는 액션 생성 함수들을 선언한다(action creators)
// 여기에서 () => ({}) 는 function() { return {} } 와 동일한 의미임

import * as types from './ActionTypes';

// 새로 만들 때 기본 색상을 받을 수 있도록 파라미터로 설정
export const create = (color) => ({
  type: types.CREATE,
  color
})

// 맨 마지막 카운터를 삭제하기 떄문에 index 필요 없음
export const remove = () => ({
  type: types.REMOVE
})

// 액션이 특정 카운터를 조작할 수 있도록 설정해야 해서 
// index 값을 액션 객체에 포함함
export const increment = (index) => ({
  type: types.INCREMENT,
  index
});

export const decrement = (index) => ({
  type: types.DECREMENT,
  index
});

export const setColor = (index, color) => ({
  type: types.SET_COLOR,
  index,
  color
});