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
  CreateFabricanteDTO,
  UpdateFabricanteDTO,
} from 'src/productos/dtos/fabricantes.dto';
import { FabricantesService } from 'src/productos/services/fabricantes.service';

@Controller('fabricantes')
export class FabricantesController {
  constructor(private fabricantesService: FabricantesService) {}

  @Get(':id')
  getFabricanteById(@Param('id', ParseIntPipe) id: number) {
    return this.fabricantesService.findOne(id);
  }

  @Get()
  findAll() {
    return this.fabricantesService.findAll();
  }

  @Post()
  create(@Body() payload: CreateFabricanteDTO) {
    return this.fabricantesService.create(payload);
  }

  @Put(':id')
  updateFabricante(
    @Param('id', ParseIntPipe) idFabricante: number,
    @Body() body: UpdateFabricanteDTO,
  ): any {
    return this.fabricantesService.update(idFabricante, body);
  }

  @Delete(':id')
  deleteFabricante(@Param('id', ParseIntPipe) idFabricante: number): any {
    return this.fabricantesService.delete(idFabricante);
  }
}
