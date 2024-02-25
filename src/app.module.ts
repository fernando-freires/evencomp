import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EventsModule } from './app/events/event.module';
import { UsersModule } from './app/users/user.module';
import { AuthModule } from './auth/auth.module';
import { ActivityModule } from './app/activities/activity.module';
import { CoordinatorsModule } from './app/coordinators/coordinator.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '1234',
      database: 'evencomp_database',
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      synchronize: true,
    } as TypeOrmModuleOptions),
    UsersModule,
    EventsModule,
    ActivityModule,
    CoordinatorsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

// Comentário teste