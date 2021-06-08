import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersModule } from './customers/customers.module';


@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://cencosud:swordfish@cluster0.k2q6w.mongodb.net/cencosud?retryWrites=true&w=majority',
      // 'mongodb+srv://cencosud:swordfish@cluster0.wjkuq.mongodb.net/spid35?retryWrites=true&w=majority',
      { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true}
    ),
    CustomersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
