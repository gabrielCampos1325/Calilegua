import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Producto } from 'src/productos/entities/producto.entity';
import { Operador } from '../entities/operador.entity';

export class CreatePedidoDTO {
  @ApiProperty()
  @IsNotEmpty()
  readonly date: Date;

  @ApiProperty()
  @IsNotEmpty()
  readonly operador: Operador;

  @ApiProperty()
  @IsNotEmpty()
  readonly products: Producto[];
}

export class UpdatePedidoDTO extends PartialType(
  OmitType(CreatePedidoDTO, ['date']),
) {}
