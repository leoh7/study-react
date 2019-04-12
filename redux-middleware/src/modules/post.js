import { handleActions, createAction } from 'redux-actions';
import { pender, applyPenders } from 'redux-pender';
import axios from 'axios';

function getPostAPI(postId) {
  return axios.get(`http://jsonplaceholder.typicode.com/posts/${postId}`)
}

// 액션 타입 정의
const GET_POST = 'GET_POST';

export const getPost = createAction(GET_POST, getPostAPI);

// 리듀서
const initialState = {
  data: {
    title: '',
    body: ''
  }
}

const reducer = handleActions({
  // 다른 일반 액션들을 관리...
}, initialState);

export default applyPenders(reducer, [
  {
    type: GET_POST,
    onSuccess: (state, action) => {
      const { title, body } = action.payload.data;
      return {
        data: {
          title,
          body
        }
      }
    },
    onCancel: (state, action) => {
      return {
        data: {
          title: '취소됨',
          body: '취소됨'
        }
      }
    }
  }
]);