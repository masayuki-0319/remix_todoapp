import { PrismaClient } from '@prisma/client';

import { postRepository } from '~/models/post.server';

const prisma = new PrismaClient();

async function main() {
  await postRepository.create({
    title: 'First Post',
    content: 'This is a first post',
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
