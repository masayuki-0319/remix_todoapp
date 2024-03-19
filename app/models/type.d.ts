interface Entity {
  id: string | number;
}

interface Repository<T> {
  readonly database: unknown;
  create(entity: Partial<T>): Promise<T>;
  find(entityId: T['id']): Promise<T | null>;
  findAll(): Promise<T[] | null>;
  update(entity: Partial<T>): Promise<T>;
  delete(entity: Entity['id']): Promise<void>;
}

export interface PrismaRepository extends Repository<Entity> {
  readonly database: PrismaClient;
}
