import { Injectable } from '@nestjs/common';
import { CreatePedidoDTO, UpdatePedidoDTO } from 'src/dtos/pedidos.dto';
import { Pedido } from 'src/entities/pedido.entity';

@Injectable()
export class PedidosService {
  private idCont = 2;
  private pedidos: Pedido[] = [
    {
      id: 1,
      clienteId: 1,
      productos: [
        {
          id: 1,
          nombre: 'Prod A',
          descripcion: 'Descripcion producto A',
          precio: 6500,
          stock: 1,
          origen: 'China',
          imagen: '',
        },
      ],
    },
    {
      id: 2,
      clienteId: 2,
      productos: [
        {
          id: 2,
          nombre: 'Prod B',
          descripcion: 'Descripcion producto B',
          precio: 7500,
          stock: 1,
          origen: 'Japon',
          imagen: '',
        },
      ],
    },
  ];

  findOne(id: number) {
    const pedido = this.pedidos.find((pedido) => pedido.id === id);
    if (!pedido) {
      throw new Error(`El pedido con id: #${id} no existe`);
    }
    return pedido;
  }

  findAll() {
    return this.pedidos;
  }

  create(payload: CreatePedidoDTO) {
    this.idCont++;
    const newPedido = {
      id: this.idCont,
      ...payload,
    };
    this.pedidos.push(newPedido);
    return newPedido;
  }

  update(id: number, payload: UpdatePedidoDTO) {
    const index = this.pedidos.findIndex((pedido) => pedido.id === id);
    if (index === -1) {
      throw new Error(`El pedido con id: #${id} no existe`);
    }
    this.pedidos[index] = {
      ...this.pedidos[index],
      ...payload,
    };
    return this.pedidos[index];
  }

  delete(id: number) {
    const index = this.pedidos.findIndex((pedido) => pedido.id === id);
    if (index === -1) {
      throw new Error(`El pedido con id: #${id} no existe`);
    }
    this.pedidos.splice(index, 1);
    return true;
  }
}
