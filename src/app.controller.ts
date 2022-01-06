import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemEntity } from './entities/item.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  createItem(): ItemEntity {
    const dto = new CreateItemDto();
    dto.name = 'Item1';
    dto.fullDescription = 'My new item';
    dto.imageUrl =
      'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png';

    return this.appService.createItem(dto);
  }
}
