import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreatePedidoDTO,
  UpdatePedidoDTO,
} from 'src/operadores/dtos/pedidos.dto';
import { Pedido } from 'src/operadores/entities/pedido.entity';
import { Repository } from 'typeorm';
import { Comprador } from '../entities/comprador.entity';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido) private pedidoRepository: Repository<Pedido>,
    @InjectRepository(Comprador)
    private compradorRepository: Repository<Comprador>,
  ) {}

  /*private id = 2;
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
  ];*/

  async findOne(id: number) {
    const pedido = await this.pedidoRepository.findOne(id, {
      relations: ['detalles', 'detalles.producto'],
    });
    if (!pedido) {
      throw new Error(`Pedido con id ${id} no encontrado`);
    }
    return pedido;
  }

  findAll() {
    return this.pedidoRepository.find();
  }

  async create(data: CreatePedidoDTO) {
    const pedido = new Pedido();
    if (data.compradorId) {
      const comprador = await this.compradorRepository.findOne(
        data.compradorId,
      );
      pedido.comprador = comprador;
    }
    return this.pedidoRepository.save(pedido);
  }

  async update(id: number, changes: UpdatePedidoDTO) {
    const pedido = await this.pedidoRepository.findOne(id);
    if (changes.compradorId) {
      const comprador = await this.compradorRepository.findOne(
        changes.compradorId,
      );
      pedido.comprador = comprador;
    }
    return this.pedidoRepository.save(pedido);
  }

  delete(id: number) {
    return this.pedidoRepository.delete(id);
  }
}
