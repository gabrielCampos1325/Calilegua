import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('pedidos')
export class PedidosController {
  constructor() {} // llenarlo con el servicio de pedidos

  @Get(':id')
  getPedidosById(@Param('id') id: string) {
    return `Pedido con ID ${id}`;
  }

  @Get()
  findAll() {
    //return this.productsService.findAll();
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Se creo un nuevo pedido',
      payload,
    };
  }

  @Put(':id')
  updatePedido(@Param('id') idPedido: string, @Body() body: any): any {
    return {
      idPedido: idPedido,
      nombre: body.nombre,
      precio: body.precio,
    };
  }

  @Delete(':id')
  deletePedido(@Param('id') idPedido: string): any {
    return {
      idPedido: idPedido,
      delete: true,
      count: 1,
    };
  }
}
