import { Body, Controller, Post } from '@nestjs/common';
import { CreateDetallePedidoDto } from '../dtos/detallePedido.dto';
import { DetallePedidoService } from '../services/detalle-pedido.service';

@Controller('detalle-pedido')
export class DetallePedidoController {
  constructor(private detallePedidoService: DetallePedidoService) {}

  @Post()
  create(@Body() payload: CreateDetallePedidoDto) {
    return this.detallePedidoService.create(payload);
  }
}
