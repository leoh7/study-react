import { Map, List } from 'immutable';
import { handleActions, createActions } from 'redux-actions';

// 액션 타입 정의
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// 액션 생성 함수
export const insert = createActions(INSERT);
export const toggle = createActions(TOGGLE);
export const remove = createActions(REMOVE);

// 리듀서 초기 상태 정의
const initialState = List([
  Map(), 
  Map()
]);

// 리듀서