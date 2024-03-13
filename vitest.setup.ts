import { vi } from 'vitest';
import { prisma } from '~/db.server';
prisma;

vi.mock('~/db.server', () => ({
  prisma: vPrisma.client,
}));
