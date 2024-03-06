import { prisma } from '../../db.server';

export async function call({ id }: { id: string }) {
  return await prisma.post.delete({
    where: { id: id },
  });
}
