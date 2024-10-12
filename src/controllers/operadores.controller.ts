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
import { OperadoresService } from 'src/services/operadores.service';

@Controller('operadores')
export class OperadoresController {
  constructor(private operadoresService: OperadoresService) {}

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.operadoresService.findOne(id);
  }

  @Get()
  findAll() {
    return this.operadoresService.findAll();
  }

  @Post()
  create(@Body() payload: any) {
    return this.operadoresService.create(payload);
  }

  @Put(':id')
  updateOperador(
    @Param('id', ParseIntPipe) idOperador: number,
    @Body() body: any,
  ): any {
    return this.operadoresService.update(idOperador, body);
  }

  @Delete(':id')
  deleteOperador(@Param('id', ParseIntPipe) idOperador: number): any {
    return this.operadoresService.delete(idOperador);
  }
}
