// src/config/config.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // Correcto: importa ConfigModule, no ConfigService
import configuration from './configuration';  

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],  
      isGlobal: true,         
      envFilePath: '.env',    
    }),
  ],
  exports: [ConfigModule],   
})
export class ConfigCustomModule {}
