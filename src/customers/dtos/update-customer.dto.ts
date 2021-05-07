import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MaxLength, MinLength } from "class-validator";

export class UpdateCustomerDto {
  @IsNotEmpty()
  @IsString()
  firstname: string;
  
  @IsNotEmpty()
  @IsString()
  lastname: string;ç
  
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(13)
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsPhoneNumber('AR')
  phone: string;

  cellphone: string;
  
  @IsNotEmpty()
  @IsString()
  state: string;
  
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  cp: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsString()
  address: string;
}
