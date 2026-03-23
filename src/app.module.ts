import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { BoardsModule } from './boards/boards.module';
import { ColumnsModule } from './columns/columns.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    WorkspacesModule,
    BoardsModule,
    ColumnsModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
