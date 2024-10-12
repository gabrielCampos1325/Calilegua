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

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return `Producto con ID ${id}`;
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Se creo un nuevo producto',
      payload,
    };
  }

  @Put(':id')
  updateProducto(@Param('id') idProduct: string, @Body() body: any): any {
    return {
      idProduct: idProduct,
      nombre: body.nombre,
      precio: body.precio,
    };
  }

  @Delete(':id')
  deleteProducto(@Param('id') idProduct: string): any {
    return {
      idProduct: idProduct,
      delete: true,
      count: 1,
    };
  }
}
