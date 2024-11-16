import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  Min,
  ValidateIf,
} from 'class-validator';

export class CreateProductDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly descripcion: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly precio: number;

  @ApiProperty({ description: 'Stock del producto - positivo' })
  @IsNumber()
  @IsNotEmpty()
  readonly stock: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly origen: string;

  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  readonly imagen: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsPositive()
  readonly fabricanteId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  readonly categoriasId: number[];
}

export class UpdateProductDTO extends PartialType(
  OmitType(CreateProductDTO, ['nombre']),
) {}

export class FilterProductsDTO {
  @IsOptional()
  @IsPositive()
  readonly limit: number;

  @IsOptional()
  @Min(0)
  readonly offset: number;

  @IsOptional()
  @IsPositive()
  readonly precioMinimo: number;

  @ValidateIf((item) => item.precioMinimo)
  @IsPositive()
  readonly precioMaximo: number;
}
