import { Injectable } from '@nestjs/common';
import { CreateDetallePedidoDto } from '../dtos/detallePedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from 'src/productos/entities/producto.entity';
import { Repository } from 'typeorm';
import { DetallePedido } from '../entities/detallePedido.entity';
import { Pedido } from '../entities/pedido.entity';

@Injectable()
export class DetallePedidoService {
  constructor(
    @InjectRepository(Pedido) private pedidoRepository: Repository<Pedido>,
    @InjectRepository(DetallePedido)
    private detallePedidoRepository: Repository<DetallePedido>,
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {}

  async create(data: CreateDetallePedidoDto) {
    const pedido = await this.pedidoRepository.findOne(data.pedidoId);
    const producto = await this.productoRepository.findOne(data.productoId);
    const detallePedido = new DetallePedido();
    detallePedido.pedido = pedido;
    detallePedido.producto = producto;
    detallePedido.cantidad = data.cantidad;
    return this.detallePedidoRepository.save(detallePedido);
  }
}
