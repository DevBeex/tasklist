import { DataSource, DataSourceOptions } from "typeorm";
import { config as dotenvConfig } from 'dotenv';
import * as allEntities from '@common/entities';

dotenvConfig({ path: '.env' });
const options: DataSourceOptions = 
{
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [...Object.values(allEntities)],
    synchronize: false,
    migrationsRun: false,
    migrations: ['src/migrations/*{.ts,.js}'],
    migrationsTableName: "migrations_typeorm",
    logging: true,
}

export const AppDataSource = new DataSource(options);