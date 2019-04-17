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

// 포스트 목록 조회
// GET /api/posts
exports.list = (ctx) => {
  ctx.body = posts;
}

// 특정 포스트 조회
// GET /api/posts/:id
exports.read = (ctx) => {
  const { id } = ctx.params;
  const post = posts.find(p => p.id.toString() === id);
  if(!post) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.'
    };
    return;
  }
  ctx.body = post;
}

// 포스트 제거
// DELETE /api/posts/:id

// 포스트 수정(교체)
// PUT /api/posts/:id
// { title, body }

// 포스트 수정(특정 필드 변경)
// PATCH /api/posts/:id
// { title, body }