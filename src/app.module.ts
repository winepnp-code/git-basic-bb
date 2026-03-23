import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { WorkspacesModule } from './workspaces/workspaces.module';

@Module({
  imports: [AuthModule, UserModule, WorkspacesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
