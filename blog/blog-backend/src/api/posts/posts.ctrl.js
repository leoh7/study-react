const Post = require('models/post');

// 포스트 작성
// POST /api/posts
// { title, body }

exports.write = async (ctx) => {
  const { title, body, tags } = ctx.request.body;

  // 새 Post 인스턴스 생성
  const post = new Post({
    title, body, tags
  });

  try {
    await post.save();  // 데이터베이스에 등록
    ctx.body = post;    // 저장된 결과를 반환
  } catch (e) {
    ctx.throw(e, 500);
  }
};

// 포스트 목록 조회
// GET /api/posts
exports.list = async (ctx) => {
  try {
    const posts = await Post.find().exec();
    ctx.body = posts;
  } catch (e) {
    ctx.throw(e, 500);    
  }
}

// 특정 포스트 조회
// GET /api/posts/:id
exports.read = (ctx) => {
}

// 포스트 제거
// DELETE /api/posts/:id
exports.remove = (ctx) => {
}

// 포스트 수정(특정 필드 변경)
// PATCH /api/posts/:id
// { title, body }
exports.update = (ctx) => {
}
