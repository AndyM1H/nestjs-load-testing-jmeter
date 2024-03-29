import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { UserSeed } from 'src/users/seeds/user.seed';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [CommandModule, UsersModule],
  providers: [UserSeed],
  exports: [UserSeed],
})
export class SeedsModule {}
