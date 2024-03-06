import { Post } from '.prisma/client';
import { prisma } from '~/db.server';

const findById = async (id: string): Promise<Post | null> => {
  return await prisma.post.findUnique({ where: { id: id } });
};

const findAll = async (): Promise<Post[]> => {
  return await prisma.post.findMany();
};

const updateById = async (
  params: Pick<Post, 'id'> & Partial<Pick<Post, 'title' | 'content'>>
): Promise<Post> => {
  const { id, title, content } = params;

  return await prisma.post.update({
    where: { id: id },
    data: { title, content },
  });
};

const deleteById = async (params: Pick<Post, 'id'>): Promise<Post> => {
  return await prisma.post.delete({
    where: { id: params.id },
  });
};

const create = async ({
  title,
  content,
}: { title: string | null } & { content: string | null }) => {
  if (!title || !content) throw new Error('Title and content are required');

  return await prisma.post.create({
    data: {
      title: title,
      content: content,
    },
  });
};

export const postRepository = {
  create,
  findById,
  findAll,
  updateById,
  deleteById,
};
