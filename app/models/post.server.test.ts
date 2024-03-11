import { describe, expect, it } from 'vitest';
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

  describe.skip('find', () => {
    it('should find a post by id', async () => {
      const postId = 'a';

      const foundPost = await postRepository.find(postId);

      expect(foundPost).toBeDefined();
      expect(foundPost?.id).toBe(postId);
    });
  });

  describe.skip('findAll', () => {
    it('should find all posts', async () => {
      const allPosts = await postRepository.findAll();

      expect(allPosts).toBeDefined();
      expect(Array.isArray(allPosts)).toBe(true);
    });
  });

  describe.skip('update', () => {
    it('should update a post', async () => {
      const post = {
        id: 'a',
        title: 'Updated Post',
        content: 'This post has been updated',
        published: false,
      };

      const updatedPost = await postRepository.update(post);

      expect(updatedPost).toBeDefined();
      expect(updatedPost.id).toBe(post.id);
      expect(updatedPost.title).toBe(post.title);
      expect(updatedPost.content).toBe(post.content);
    });
  });

  describe.skip('delete', () => {
    it('should delete a post', async () => {
      const postId = 'a';

      await postRepository.delete(postId);

      // Verify that the post has been deleted
      const deletedPost = await postRepository.find(postId);
      expect(deletedPost).toBeNull();
    });
  });
});
