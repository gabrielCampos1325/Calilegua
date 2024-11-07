import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOperadorDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly role: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly compradorId: number;
}

export class UpdateOperadorDTO extends PartialType(
  OmitType(CreateOperadorDTO, ['email']),
) {}
