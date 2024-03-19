import { Post } from '.prisma/client';

import { prisma } from '~/db.server';

import { PrismaRepository } from './type.d';

export class PostRepository implements PrismaRepository<Post> {
  readonly database = prisma;

  async create(post: Pick<Post, 'title' | 'content'>) {
    const { title, content } = post;
    if (!title || !content) throw new Error('Title and content are required');

    return await this.database.post.create({
      data: {
        title: title,
        content: content,
      },
    });
  }

  async find(id: Post['id']) {
    return await this.database.post.findUnique({ where: { id } });
  }

  async findAll(): Promise<Post[]> {
    return await this.database.post.findMany();
  }

  async update(post: Partial<Post>) {
    const { id, title, content } = post;

    return await this.database.post.update({
      where: { id: id },
      data: { title, content },
    });
  }

  async delete(id: Post['id']) {
    await this.database.post.delete({
      where: { id },
    });
    return;
  }
}

const postRepository = new PostRepository();

export { postRepository };
