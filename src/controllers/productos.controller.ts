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
  getProductoById(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Post()
  create(@Body() payload: any) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  updateProducto(@Param('id') idProduct: string, @Body() body: any): any {
    return this.productsService.update(+idProduct, body);
  }

  @Delete(':id')
  deleteProducto(@Param('id') idProduct: string): any {
    return this.productsService.delete(+idProduct);
  }
}
