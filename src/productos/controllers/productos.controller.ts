import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import {
  CreateProductDTO,
  UpdateProductDTO,
} from 'src/productos/dtos/products.dto';
import { ProductosService } from 'src/productos/services/productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private productsService: ProductosService) {}

  @Get(':id')
  getProductoById(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Post()
  create(@Body() payload: CreateProductDTO) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  updateProducto(
    @Param('id', ParseIntPipe) idProduct: number,
    @Body() body: UpdateProductDTO,
  ): any {
    return this.productsService.update(idProduct, body);
  }

  @Delete(':id')
  deleteProducto(@Param('id', ParseIntPipe) idProduct: number): any {
    return this.productsService.delete(idProduct);
  }
}
