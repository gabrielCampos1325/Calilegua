import { OmitType, PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { Producto } from 'src/entities/producto.entity';

export class CreatePedidoDTO {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly clienteId: number;

  @IsNotEmpty()
  readonly productos: Producto[];
}

export class UpdatePedidoDTO extends PartialType(
  OmitType(CreatePedidoDTO, ['clienteId']),
) {}
