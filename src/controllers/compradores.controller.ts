import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('compradores')
export class CompradoresController {
  constructor() {} // llenarlo con el servicio de comprador

  @Get(':id')
  getCompradorById(@Param('id') id: string) {
    return `Comprador con ID ${id}`;
  }

  @Get()
  findAll() {
    //return this.productsService.findAll();
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Se creo un nuevo comprador',
      payload,
    };
  }

  @Put(':id')
  updateComprador(@Param('id') idComprador: string, @Body() body: any): any {
    return {
      idComprador: idComprador,
      nombre: body.nombre,
      precio: body.precio,
    };
  }

  @Delete(':id')
  deleteComprador(@Param('id') idComprador: string): any {
    return {
      idComprador: idComprador,
      delete: true,
      count: 1,
    };
  }
}
