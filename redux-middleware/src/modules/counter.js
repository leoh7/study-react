import { handleActions, createAction } from 'redux-actions';

// 액션 타입 정의
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// 액션 생성 함수
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// 리덕스
export default handleActions({
    [INCREMENT]: (state, action) => state + 1,
    [DECREMENT]: (state, action) => state - 1
}, 0);