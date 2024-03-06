import { prisma } from '../../db.server';

export async function call() {
  return await prisma.post.findMany();
}
