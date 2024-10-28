import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreatePedidoDTO,
  UpdatePedidoDTO,
} from 'src/operadores/dtos/pedidos.dto';
import { Pedido } from 'src/operadores/entities/pedido.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private pedidoRepository: Repository<Pedido>,
  ) {}

  private id = 2;
  private pedidos: Pedido[] = [
    {
      id: 1,
      date: new Date(),
      operador: {
        id: 1,
        email: 'juan@gmail.com',
        password: '123456',
        role: 'role1',
      },
      products: [
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
      date: new Date(),
      operador: {
        id: 2,
        email: 'juan@gmail.com',
        password: '123456',
        role: 'role1',
      },
      products: [
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
    const pedido = this.pedidoRepository.findOneBy({ id });
    if (!pedido) {
      throw new Error(`El pedido con id: #${id} no existe`);
    }
    return pedido;
  }

  findAll() {
    return this.pedidoRepository.find();
  }

  create(data: CreatePedidoDTO) {
    const newPedido = this.pedidoRepository.create(data);
    return this.pedidoRepository.save(newPedido);
  }

  async update(id: number, changes: UpdatePedidoDTO) {
    const pedido = await this.pedidoRepository.findOneBy({ id });
    this.pedidoRepository.merge(pedido, changes);
    return this.pedidoRepository.save(pedido);
  }

  delete(id: number) {
    return this.pedidoRepository.delete(id);
  }
}
