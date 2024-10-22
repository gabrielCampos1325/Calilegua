import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateFabricanteDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly pais: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly direccion: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  readonly imagen: string;
}

export class UpdateFabricanteDTO extends PartialType(
  OmitType(CreateFabricanteDTO, ['nombre']),
) {}
