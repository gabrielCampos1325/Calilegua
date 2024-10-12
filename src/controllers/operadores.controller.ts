import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { OperadoresService } from 'src/services/operadores.service';

@Controller('operadores')
export class OperadoresController {
  constructor(private operadoresService: OperadoresService) {}

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.operadoresService.findOne(+id);
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
  updateOperador(@Param('id') idOperador: string, @Body() body: any): any {
    return this.operadoresService.update(+idOperador, body);
  }

  @Delete(':id')
  deleteOperador(@Param('id') idOperador: string): any {
    return this.operadoresService.delete(+idOperador);
  }
}
