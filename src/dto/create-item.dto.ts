import { AutoMap } from '@automapper/classes';

export class CreateItemDto {
  @AutoMap()
  name: string;

  fullDescription: string;
  imageUrl: string;
}
