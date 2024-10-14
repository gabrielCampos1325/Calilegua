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
  CreateCategoriaDTO,
  UpdateCategoriaDTO,
} from 'src/productos/dtos/categorias.dto';
import { CategoriasService } from 'src/productos/services/categorias.service';

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
  create(@Body() payload: CreateCategoriaDTO) {
    return this.categoriasService.create(payload);
  }

  @Put(':id')
  updateCategoria(
    @Param('id', ParseIntPipe) idCategoria: number,
    @Body() body: UpdateCategoriaDTO,
  ): any {
    return this.categoriasService.update(idCategoria, body);
  }

  @Delete(':id')
  deleteCategoria(@Param('id', ParseIntPipe) idCategoria: number): any {
    return this.categoriasService.delete(idCategoria);
  }
}
