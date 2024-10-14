import { Operador } from './operador.entiy';
import { Producto } from '../../productos/entities/producto.entity';

export class Pedido {
  date: Date;
  operador: Operador;
  products: Producto[];
}
