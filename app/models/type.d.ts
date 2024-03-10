interface Entity {
  id: string | number;
}

interface Repository<Entity> {
  readonly database: unknown;
  create(entity: Partial<Entity>): Promise<Entity>;
  find(entityId: Entity['id']): Promise<Entity | null>;
  findAll(): Promise<Entity[] | null>;
  update(entity: Partial<Entity>): Promise<Entity>;
  delete(entity: Entity['id']): Promise<void>;
}

export interface PrismaRepository<Entity> extends Repository<Entity> {
  readonly database: PrismaClient;
}
