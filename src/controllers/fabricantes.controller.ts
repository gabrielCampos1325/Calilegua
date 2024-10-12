import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('fabricantes')
export class FabricantesController {
  constructor() {} // llenarlo con el servicio de fabricantes

  @Get(':id')
  getFabricanteById(@Param('id') id: string) {
    return `Fabricante con ID ${id}`;
  }

  @Get()
  findAll() {
    //return this.productsService.findAll();
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Se creo un nuevo fabricante',
      payload,
    };
  }

  @Put(':id')
  updateFabricante(@Param('id') idFabricante: string, @Body() body: any): any {
    return {
      idFabricante: idFabricante,
      nombre: body.nombre,
      precio: body.precio,
    };
  }

  @Delete(':id')
  deleteFabricante(@Param('id') idFabricante: string): any {
    return {
      idFabricante: idFabricante,
      delete: true,
      count: 1,
    };
  }
}
