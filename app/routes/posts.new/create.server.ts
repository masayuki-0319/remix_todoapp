import { prisma } from '../../db.server';

export async function call({
  title,
  content,
}: { title: string | null } & { content: string | null }) {
  if (!title || !content) throw new Error('Title and content are required');

  return await prisma.post.create({
    data: {
      title: title,
      content: content,
    },
  });
}
