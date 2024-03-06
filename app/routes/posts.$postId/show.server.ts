import { prisma } from '../../db.server';

export async function call({ id }: { id: string }) {
  return await prisma.post.findUnique({ where: { id: id } });
}
