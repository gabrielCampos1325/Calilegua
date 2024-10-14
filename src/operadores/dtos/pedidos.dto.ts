import { OmitType, PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { Producto } from 'src/productos/entities/producto.entity';
import { Operador } from '../entities/operador.entiy';

export class CreatePedidoDTO {
  @IsNotEmpty()
  readonly date: Date;

  @IsNotEmpty()
  readonly operador: Operador;

  @IsNotEmpty()
  readonly products: Producto[];
}

export class UpdatePedidoDTO extends PartialType(
  OmitType(CreatePedidoDTO, ['date']),
) {}
