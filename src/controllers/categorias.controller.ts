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
import { CategoriasService } from 'src/services/categorias.service';

@Controller('categorias')
export class CategoriasController {
  constructor(private categoriasService: CategoriasService) {}

  @Get(':id')
  getCategoriaById(@Param('id', ParseIntPipe) id: number) {
    return this.categoriasService.findOne(id);
  }

  @Get()
  findAll() {
    return this.categoriasService.findAll();
  }

  @Post()
  create(@Body() payload: any) {
    return this.categoriasService.create(payload);
  }

  @Put(':id')
  updateCategoria(
    @Param('id', ParseIntPipe) idCategoria: number,
    @Body() body: any,
  ): any {
    return this.categoriasService.update(idCategoria, body);
  }

  @Delete(':id')
  deleteCategoria(@Param('id', ParseIntPipe) idCategoria: number): any {
    return this.categoriasService.delete(idCategoria);
  }
}
