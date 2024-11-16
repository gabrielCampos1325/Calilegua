import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoriaDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;
}

export class UpdateCategoriaDTO extends PartialType(CreateCategoriaDTO) {}
