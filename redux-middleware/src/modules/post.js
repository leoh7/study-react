import { handleActions, createAction } from 'redux-actions';

import axios from 'axios';

function getPostAPI(postId) {
  return axios.get(`http://jsonplaceholder.typicode.com/posts/${postId}`)
}

// 액션 타입 정의
const GET_POST = 'GET_POST';
const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';
// 액션 생성 함수 정의
const getPostPending = createAction(GET_POST_PENDING);
const getPostSuccess = createAction(GET_POST_SUCCESS);
const getPostFailure = createAction(GET_POST_FAILURE);

// thunk 생성 함수 정의
export const getPost = (postId) => ({
  type: GET_POST,
  payload: getPostAPI(postId);
});

// 리듀서
const initialState = {
  pending: false,
  error: false,
  data: {
    title: '',
    body: ''
  }
}

export default handleActions({
  [GET_POST_PENDING]: (state, action) => {
    return {
      ...state,
      pending: true,
      error: false
    };
  },
  [GET_POST_SUCCESS]: (state, action) => {
    const { title, body } = action.payload.data;
    return {
      ...state,
      pending: false,
      data: {
        title,
        body
      }
    };
  },
  [GET_POST_FAILURE]: (state, action) => {
    return {
      ...state,
      pending: false,
      error: true
    }
  }
}, initialState);