import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PedidosService } from 'src/services/pedidos.service';

@Controller('pedidos')
export class PedidosController {
  constructor(private pedidosService: PedidosService) {}

  @Get(':id')
  getPedidosById(@Param('id') id: string) {
    return this.pedidosService.findOne(+id);
  }

  @Get()
  findAll() {
    return this.pedidosService.findAll();
  }

  @Post()
  create(@Body() payload: any) {
    return this.pedidosService.create(payload);
  }

  @Put(':id')
  updatePedido(@Param('id') idPedido: string, @Body() body: any): any {
    return this.pedidosService.update(+idPedido, body);
  }

  @Delete(':id')
  deletePedido(@Param('id') idPedido: string): any {
    return this.pedidosService.delete(+idPedido);
  }
}
