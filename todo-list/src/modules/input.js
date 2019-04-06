import { Map } from 'immutable';
import { handleActions, createActions } from 'redux-actions';

// 액션 타입 정의
// 리듀서 이름을 접두사로 설정함
const SET_INPUT = 'input/SET_INPUT';

// 액션 생성 함수
export const setInput = createActions(SET_INPUT);