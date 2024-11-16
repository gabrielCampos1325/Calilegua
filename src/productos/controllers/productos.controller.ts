import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  CreateProductDTO,
  FilterProductsDTO,
  UpdateProductDTO,
} from 'src/productos/dtos/products.dto';
import { ProductosService } from 'src/productos/services/productos.service';

@ApiTags('Productos')
@Controller('productos')
export class ProductosController {
  constructor(private productsService: ProductosService) {}

  @Get(':id')
  getProductoById(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @ApiOperation({ summary: 'Catalogo de todos los productos' })
  @Get()
  findAll(@Query() params: FilterProductsDTO) {
    return this.productsService.findAll(params);
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

  @Put(':id/agregarcategoria/:idCategoria')
  addCategoryToProduct(
    @Param('id', ParseIntPipe) idProduct: number,
    @Param('idCategoria', ParseIntPipe) idCategoria: number,
  ) {
    return this.productsService.addCategoryByProduct(idProduct, idCategoria);
  }

  @Put(':id/eliminarCategoria/:idCategoria')
  removeCategoryToProduct(
    @Param('id', ParseIntPipe) idProduct: number,
    @Param('idCategoria', ParseIntPipe) idCategoria: number,
  ) {
    return this.productsService.removeCategoryByProduct(idProduct, idCategoria);
  }

  @Delete(':id')
  deleteProducto(@Param('id', ParseIntPipe) idProduct: number): any {
    return this.productsService.delete(idProduct);
  }
}
