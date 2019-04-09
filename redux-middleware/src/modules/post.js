import { handleActions, createAction } from 'redux-actions';

import axios from 'axios';

function getPostAPI(postId) {
  return axios.get(`http://jsonplaceholder.typicode.com/posts/${postId}`)
}

// 액션 타입 정의
const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';
// 액션 생성 함수 정의
const getPostPending = createAction(GET_POST_PENDING);
const getPostSuccess = createAction(GET_POST_SUCCESS);
const getPostFailure = createAction(GET_POST_FAILURE);

// thunk 생성 함수 정의
export const getPost = (postId) => dispatch => {
  // 먼저 요청이 시작됐다는 것을 알림
  dispatch(getPostPending());

  // 요청을 시작함, 여기에서 만든 Promise를 return 해야
  // 나중에 컴포넌트에서 호출할 때 getPost().then(...)을 할 수 있다.
  return getPostAPI(postId)
    .then((response) => {
      //요청이 성공했다면 서버 응답 내용을 payload로 설정하여
      // GET_POST_SUCCESS 액션을 디스패치
      dispatch(getPostSuccess(response))
      return response;
    }).catch(error => {
      // 오류가 발생하면 오류 내용을 payload로 설정하여
      // GET_POST_FAILURE 액션을 디스패치함.
      dispatch(getPostFailure(error));
      // error를 throw하여 이 함수를 실행한 후
      // 다시 한 번 catch를 할 수 있게 함
      throw(error);
    })
}