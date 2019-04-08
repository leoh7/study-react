import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// 액션 타입 정의
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// 액션 생성 함수
export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

// 리듀서 초기 상태 정의
const initialState = List([
  Map({
    id: 0,
    text: '리액트 공부하기',
    done: true
  }), 
  Map({
    id: 1,
    text: '컴포넌트 스타일링 해보기',
    done: false
  })
]);

// 리듀서
export default handleActions({
  [INSERT]: (state, action) => {
    const { id, text, done } = action.payload;
    return state.push(Map({
      id,
      text,
      done
    }));
  },
  [TOGGLE]: (state, action) => {
    const { id } = action.payload;
    
    // 전달받은 id 로 index 를 조회
    const index = state.findIndex(todo => todo.get('id') === id);
    // return state.setIn([index, 'done'], !state.getIn([0, index]));
    return state.updateIn([index, 'done'], done => !done);
  },
  [REMOVE]: (state, action) => {
    const { id } = action.payload;
    const index = state.findIndex(todo => todo.get('id') === id);
    return state.delete(index);
  }
}, initialState);