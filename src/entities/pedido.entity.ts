import { Producto } from './producto.entity';

export class Pedido {
  id: number;
  clienteId: number;
  productos: Producto[];
}
