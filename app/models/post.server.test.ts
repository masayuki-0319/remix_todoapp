import { postTestFactory } from '~/test/factories/post';

import { PostRepository } from './post.server';

describe('PostRepository', () => {
  const postRepository: PostRepository = new PostRepository();

  describe('create', () => {
    it('should create a new post', async () => {
      const post = {
        title: 'Test Post',
        content: 'This is a test post',
      };

      const createdPost = await postRepository.create(post);

      expect(createdPost.title).toBe(post.title);
      expect(createdPost.content).toBe(post.content);
    });
  });

  describe('find', () => {
    it('should find a post by id', async () => {
      const post = await postTestFactory.create();
      const foundPost = await postRepository.find(post.id);

      expect(foundPost).toBeDefined();
      expect(foundPost?.id).toBe(post.id);
    });
  });

  describe('findAll', () => {
    it('should find all posts', async () => {
      await postTestFactory.createList(2);

      const posts = await postRepository.findAll();

      expect(posts).toBeDefined();
      expect(posts).toHaveLength(2);
    });
  });

  describe('update', () => {
    it('should update a post', async () => {
      const post = await postTestFactory.create({
        title: 'before title',
        content: 'before content',
        published: false,
      });

      const updateParams = {
        id: post.id,
        title: 'after title',
        content: 'after content',
        published: true,
      };

      const updatedPost = await postRepository.update(updateParams);

      expect(updatedPost).toBeDefined();
      expect(updatedPost.id).toBe(post.id);
      expect(updatedPost.title).toBe(updateParams.title);
      expect(updatedPost.content).toBe(updateParams.content);
    });
  });

  describe('delete', () => {
    it('should delete a post', async () => {
      const post = await postTestFactory.create();

      await postRepository.delete(post.id);

      const deletedPost = await postRepository.find(post.id);

      expect(deletedPost).toBeNull();
    });
  });
});
