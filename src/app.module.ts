import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersModule } from './customers/customers.module';


@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://xxx:xxx@cluster0.k2q6w.mongodb.net/xxx?retryWrites=true&w=majority',
      { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true}
    ),
    CustomersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
