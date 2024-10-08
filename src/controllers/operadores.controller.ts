import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('operadores')
export class OperadoresController {
  constructor() {} // llenarlo con el servicio de operadores

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return `Operador con ID ${id}`;
  }

  @Get()
  findAll() {
    //return this.productsService.findAll();
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Se creo un nuevo operador',
      payload,
    };
  }

  @Put(':id')
  updateOperador(@Param('id') idOperador: string, @Body() body: any): any {
    return {
      idOperador: idOperador,
      nombre: body.nombre,
      precio: body.precio,
    };
  }

  @Delete(':id')
  deleteOperador(@Param('id') idOperador: string): any {
    return {
      idOperador: idOperador,
      delete: true,
      count: 1,
    };
  }
}
