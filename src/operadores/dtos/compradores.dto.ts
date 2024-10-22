import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCompradorDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly apellido: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly telefono: string;
}

export class UpdateCompradorDTO extends PartialType(
  OmitType(CreateCompradorDTO, ['nombre']),
) {}
