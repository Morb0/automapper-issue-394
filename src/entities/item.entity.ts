import { BaseEntity } from './base.entity';

export class ItemEntity extends BaseEntity {
  name: string;
  description: string;
  iconUrl: string;
}
