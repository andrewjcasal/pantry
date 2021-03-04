import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';

@Module({
    imports: [
        ItemsModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST || 'localhost',
            port: 5432,
            username: process.env.POSTGRES_USERNAME || 'postgres',
            password: process.env.POSTGRES_PASSWORD || 'pass123',
            database: process.env.POSTGRES_DATABASE || 'postgres',
            autoLoadEntities: true,
            synchronize: true,
            ssl: { rejectUnauthorized: false },
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
