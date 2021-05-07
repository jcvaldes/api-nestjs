import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dtos/create-customer.dto';
import { UpdateCustomerDto } from './dtos/update-customer.dto';
import { Customer } from './interfaces/customer.interface';

@Controller('api/v1/customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  @Get()
  async getCustomers(): Promise<Customer[]>{
    return await this.customersService.getCustomers()
  }
  @Get('/:customerId')
  async getCustomerById(
     @Param('customerId') customerId: string
  ): Promise<Customer> {
    return await this.customersService.getById(customerId);
  }
  @Put(':customerId')
  @UsePipes(ValidationPipe)
  async updateCustomer(
    @Body() updateCustomerDto: UpdateCustomerDto,
    @Param('customerId') customerId: string
  ): Promise<Customer> {
    return await this.customersService.updateCustomer(customerId, updateCustomerDto)
  }
  @Post()
  @UsePipes(ValidationPipe)
  async createCustomer(
    @Body() createCustomerDto: CreateCustomerDto
  ) : Promise<Customer> {
    return await this.customersService.createCustomer(createCustomerDto);
  }

  @Delete('/:customerId')
  async deleteCustomer(
    @Param('customerId') customerId: string
  ): Promise<void> {
    await this.customersService.deleteCustomer(customerId)
  }
}
