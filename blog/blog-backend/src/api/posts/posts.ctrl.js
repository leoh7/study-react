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
  const page = parseInt(ctx.query.page || 1, 10);
  if(page < 1) {
    ctx.status = 400;
    return;
  }

  try {
    const posts = await Post.find()
      .sort({_id: -1})  // 내림차순 정렬 -1 / 오름차순 정렬 1
      .limit(10)
      .skip((page - 1) * 10)
      .exec();
      
    const postCount = await Post.countDocuments().exec();
    ctx.set('Last-Page', Math.ceil(postCount / 10));
    ctx.body = posts;
  } catch (e) {
    ctx.throw(e, 500);    
  }
}

// 특정 포스트 조회
// GET /api/posts/:id
exports.read = async (ctx) => {
  try {
    const { id } = ctx.params;
    const post = await Post.findById(id).exec();
    if(!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(e, 500);
  }
}

// 포스트 제거
// DELETE /api/posts/:id
exports.remove = async (ctx) => {
  try {
    const { id } = ctx.params;
    await Post.findByIdAndDelete(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(e, 500);
  }
}

// 포스트 수정(특정 필드 변경)
// PATCH /api/posts/:id
// { title, body }
exports.update = async (ctx) => {
  try {
    const { id } = ctx.params;
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true
    }).exec();
    if(!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(e, 500);
  }
}
