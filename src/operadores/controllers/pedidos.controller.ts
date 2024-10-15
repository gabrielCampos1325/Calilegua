import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import {
  CreatePedidoDTO,
  UpdatePedidoDTO,
} from 'src/operadores/dtos/pedidos.dto';
import { PedidosService } from 'src/operadores/services/pedidos.service';

@Controller('pedidos')
export class PedidosController {
  constructor(private pedidosService: PedidosService) {}

  /*@Get(':id')
  getPedidosById(@Param('id', ParseIntPipe) id: number) {
    return this.pedidosService.findOne(id);
  }*/

  @Get()
  findAll() {
    return this.pedidosService.findAll();
  }

  @Post()
  create(@Body() payload: CreatePedidoDTO) {
    return this.pedidosService.create(payload);
  }

  /*@Put(':id')
  updatePedido(
    @Param('id', ParseIntPipe) idPedido: number,
    @Body() body: UpdatePedidoDTO,
  ): any {
    return this.pedidosService.update(idPedido, body);
  }*/

  /*@Delete(':id')
  deletePedido(@Param('id', ParseIntPipe) idPedido: number): any {
    return this.pedidosService.delete(idPedido);
  }*/
}
