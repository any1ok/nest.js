import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { FoodController } from './food/food.controller';

@Module({
  imports: [],
  controllers: [AppController, MoviesController, FoodController],
  providers: [AppService, MoviesService],
})
export class AppModule {}
