let postId = 1;   // id의 초깃값

const posts = [
  {
    id: 1,
    title: '제목',
    body: '내용'
  }
];

// 포스트 작성
// POST /api/posts
// { title, body }

exports.write = (ctx) => {
  // REST API의 request body는 ctx.request.body에서 조회할 수 있다.
  const {
    title,
    body
  } = ctx.request.body;

  postId += 1;

  const post = { id: postId, title, body };
  posts.push(post);
  ctx.body = post;
};

