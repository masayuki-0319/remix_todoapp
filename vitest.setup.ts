import { vi } from 'vitest';

import { prisma } from '~/db.server';
prisma;

vi.mock('./app/db.server', () => ({
  prisma: vPrisma.client,
}));
