import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ApiControllerController } from './api-controller/api-controller.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, ApiControllerController],
  providers: [AppService],
})
export class AppModule {}
