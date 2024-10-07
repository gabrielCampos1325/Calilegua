import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductosService } from 'src/services/productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private productsService: ProductosService) {}

  @Get('obtener/:id')
  getUserById(@Param('id') id: string) {
    return `Producto con ID ${id}`;
  }

  @Get('listar')
  findAll() {
    return this.productsService.findAll();
  }

  @Post('crear')
  create(@Body() payload: any) {
    return {
      message: 'Se creo un nuevo producto',
      payload,
    };
  }

  @Put('modificar/:idProduct')
  updateProducto(
    @Param('idProduct') idProduct: string,
    @Body() body: any,
  ): any {
    return {
      idProduct: idProduct,
      nombre: body.nombre,
      precio: body.precio,
    };
  }

  @Delete(':idProduct')
  deleteProducto(@Param('idProduct') idProduct: string): any {
    return {
      idProduct: idProduct,
      delete: true,
      count: 1,
    };
  }
}
