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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  CreatePedidoDTO,
  UpdatePedidoDTO,
} from 'src/operadores/dtos/pedidos.dto';
import { PedidosService } from 'src/operadores/services/pedidos.service';

@ApiTags('Pedidos')
@Controller('pedidos')
export class PedidosController {
  constructor(private pedidosService: PedidosService) {}

  @Get(':id')
  getPedidosById(@Param('id', ParseIntPipe) id: number) {
    return this.pedidosService.findOne(id);
  }

  @ApiOperation({ summary: 'Catalogo de todos los pedidos' })
  @Get()
  findAll() {
    return this.pedidosService.findAll();
  }

  @Post()
  create(@Body() payload: CreatePedidoDTO) {
    return this.pedidosService.create(payload);
  }

  @Put(':id')
  updatePedido(
    @Param('id', ParseIntPipe) idPedido: number,
    @Body() body: UpdatePedidoDTO,
  ): any {
    return this.pedidosService.update(idPedido, body);
  }

  @Delete(':id')
  deletePedido(@Param('id', ParseIntPipe) idPedido: number) {
    return this.pedidosService.delete(idPedido);
  }
}
