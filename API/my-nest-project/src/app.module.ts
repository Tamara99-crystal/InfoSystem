import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'env',
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/koko-feet'),
    ProductsModule,
    AuthModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
