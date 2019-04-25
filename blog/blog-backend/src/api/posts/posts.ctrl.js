const Post = require('models/post');
const { ObjectId } = require('mongoose').Types;
const Joi = require('joi');

exports.checkObjectId = (ctx, next) => {
  const { id } = ctx.params;
  if(!ObjectId.isValid(id)) {
    ctx.status = 400; // 400 Bad Request
    return null;
  }
  return next();  // next를 return 해야 ctx.body가 제대로 설정됨
}

// 포스트 작성
// POST /api/posts
// { title, body }

exports.write = async (ctx) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required()
  });

  const result = Joi.validate(ctx.request.body, schema);  // params: 검증할 객체, 스키마

  if(result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
  
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
