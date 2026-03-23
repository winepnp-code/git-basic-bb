import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [AuthModule, UserModule, WorkspacesModule, BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
