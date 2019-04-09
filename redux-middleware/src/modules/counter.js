import { handleActions, createAction } from 'redux-actions';

// 액션 타입 정의
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// 액션 생성 함수
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// thunk 생성함수
export const incrementAsync = () => 
    dispatch => {
    // 1초 뒤 액션 디스패치
    setTimeout(
        () => { dispatch(increment()) },
        10 * 1000
    );
}
export const decrementAsync = () => 
    dispatch => {
    setTimeout(
        () => { dispatch(decrement()) },
        1 * 1000
    );
}

// 리덕스
export default handleActions({
    [INCREMENT]: (state, action) => state + 1,
    [DECREMENT]: (state, action) => state - 1
}, 1);