import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import type { Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemEntity } from './entities/item.entity';
import { mapFrom } from '@automapper/core';

@Injectable()
export class AppProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper
        .createMap(CreateItemDto, ItemEntity)
        .forMember(
          (d) => d.iconUrl,
          mapFrom((s) => s.imageUrl),
        )
        .forMember(
          (d) => d.description,
          mapFrom((s) => s.fullDescription),
        );
    };
  }
}
