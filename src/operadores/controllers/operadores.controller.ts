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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  CreateOperadorDTO,
  UpdateOperadorDTO,
} from 'src/operadores/dtos/operadores.dto';
import { OperadoresService } from 'src/operadores/services/operadores.service';

@ApiTags('Operadores')
@Controller('operadores')
export class OperadoresController {
  constructor(private operadoresService: OperadoresService) {}

  @Get('tasks')
  getTasks() {
    return this.operadoresService.getTasks();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.operadoresService.findOne(id);
  }

  @ApiOperation({ summary: 'Catalogo de todos los operadores' })
  @Get()
  findAll() {
    return this.operadoresService.findAll();
  }

  /*@Get(':id/pedidos')
  getOrders(@Param('id', ParseIntPipe) id: number) {
    return this.operadoresService.getOrderByUser(id);
  }*/

  @Post()
  create(@Body() payload: CreateOperadorDTO) {
    return this.operadoresService.create(payload);
  }

  @Put(':id')
  updateOperador(
    @Param('id', ParseIntPipe) idOperador: number,
    @Body() body: UpdateOperadorDTO,
  ): any {
    return this.operadoresService.update(idOperador, body);
  }

  @Delete(':id')
  deleteOperador(@Param('id', ParseIntPipe) idOperador: number): any {
    return this.operadoresService.delete(idOperador);
  }
}
