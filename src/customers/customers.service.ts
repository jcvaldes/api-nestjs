import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerDto } from './dtos/create-customer.dto';
import { UpdateCustomerDto } from './dtos/update-customer.dto';

import { Customer } from './interfaces/customer.interface';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel('Customer') private readonly customerModel: Model<Customer>,
  ) {}
  async getCustomers(): Promise<Customer[]> {
    return await this.customerModel.find().exec();
  }
  async getById(_id: string): Promise<Customer> {
    return await this.customerModel.findById(_id).exec();
  }
  async createCustomer(
    createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    const customerFound = await this.customerModel
      .findOne({ email: createCustomerDto.email })
      .exec();
    if (customerFound) {
      throw new BadRequestException(
        `El email ${createCustomerDto.email} ya existe`,
      );
    }
    const customerCreated = new this.customerModel(createCustomerDto);
    return await customerCreated.save();
  }
  async updateCustomer(
    _id: string,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    const customerFound = await this.customerModel.findOne({ _id }).exec();
    if (!customerFound) {
      throw new BadRequestException(
        `Cliente con email ${updateCustomerDto.email} ya existe`,
      );
    }
    return await this.customerModel
      .findOneAndUpdate({ _id }, { $set: updateCustomerDto}, {new: true})
      .exec();
  }

  async deleteCustomer(_id: string): Promise<void> {
    const customerFound = await this.customerModel.findById({ _id }).exec();
    if (!customerFound) {
      throw new BadRequestException(`El cliente que quiere eliminar no existe`);
    }
    await this.customerModel.deleteOne({ _id }).exec();
  }
}
