import { Module } from '@nestjs/common';
import { AppEntity } from "./app.entity";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './tasks/task.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: "localhost",
      port: 5432,
      username: 'postgres',
      password: 'roti9599',
      database: 'tbl_pretest',
      synchronize: true,
       entities: [AppEntity],
  
      logging: true
    }),
    TypeOrmModule.forFeature([AppEntity]),
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}








