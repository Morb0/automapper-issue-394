import { Module } from '@nestjs/common';
import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppProfile } from './app.profile';

@Module({
  imports: [
    AutomapperModule.forRoot({
      options: [
        {
          name: 'classes',
          pluginInitializer: classes,
        },
      ],
      singular: true,
    }),
  ],
  providers: [AppService, AppProfile],
  controllers: [AppController],
})
export class AppModule {}
