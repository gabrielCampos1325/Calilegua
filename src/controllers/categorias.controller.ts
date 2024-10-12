import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('categorias')
export class CategoriasController {
  constructor() {} // llenarlo con el servicio de categorias

  @Get(':id')
  getCategoriaById(@Param('id') id: string) {
    return `Categoria con ID ${id}`;
  }

  @Get()
  findAll() {
    //return this.productsService.findAll();
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Se creo una nueva categoria',
      payload,
    };
  }

  @Put(':id')
  updateCategoria(@Param('id') idCategoria: string, @Body() body: any): any {
    return {
      idCategoria: idCategoria,
      nombre: body.nombre,
      precio: body.precio,
    };
  }

  @Delete(':id')
  deleteCategoria(@Param('id') idCategoria: string): any {
    return {
      idCategoria: idCategoria,
      delete: true,
      count: 1,
    };
  }
}
