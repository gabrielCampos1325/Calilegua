import { OmitType, PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateFabricanteDTO {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @IsString()
  @IsNotEmpty()
  readonly pais: string;

  @IsString()
  @IsNotEmpty()
  readonly direccion: string;

  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @IsUrl()
  @IsNotEmpty()
  readonly imagen: string;
}

export class UpdateFabricanteDTO extends PartialType(
  OmitType(CreateFabricanteDTO, ['nombre']),
) {}
