import { Module } from '@nestjs/common';

import { DatabaseModule } from '@common/modules';
import { UserModule } from './user/user.module';
import { StatusModule } from './status/status.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [DatabaseModule, UserModule, StatusModule, RoleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
