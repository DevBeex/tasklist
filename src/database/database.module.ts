import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { ConfigCustomModule } from '@config/config.module'; 
import * as allEntities from '@common/entities'
@Module({
  imports: [
    ConfigCustomModule, 
    TypeOrmModule.forRootAsync({
      imports: [ConfigCustomModule], 
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.user'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.name'),
        entities: Object.values(allEntities), 
        synchronize: false,
        migrations: [__dirname + '/src/migrations/*{.ts,.js}'], 
        cli: {
          migrationsDir: 'src/migrations', 
        },
      }),
      inject: [ConfigService], 
    }),
  ],
  exports: [TypeOrmModule], 
})
export class DatabaseModule {}
