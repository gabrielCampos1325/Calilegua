import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { CategoriasService } from 'src/services/categorias.service';

@Controller('categorias')
export class CategoriasController {
  constructor(private categoriasService: CategoriasService) {}

  @Get(':id')
  getCategoriaById(@Param('id') id: string) {
    return this.categoriasService.findOne(+id);
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
  updateCategoria(@Param('id') idCategoria: string, @Body() body: any): any {
    return this.categoriasService.update(+idCategoria, body);
  }

  @Delete(':id')
  deleteCategoria(@Param('id') idCategoria: string): any {
    return this.categoriasService.delete(+idCategoria);
  }
}
