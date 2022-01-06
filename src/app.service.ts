import { Injectable } from '@nestjs/common';
import { ItemEntity } from './entities/item.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

@Injectable()
export class AppService {
  constructor(@InjectMapper() private readonly mapper: Mapper) {}

  createItem(dto: CreateItemDto): ItemEntity {
    const newItem = this.mapper.map(dto, ItemEntity, CreateItemDto);
    // Save to DB...
    return newItem;
  }
}
