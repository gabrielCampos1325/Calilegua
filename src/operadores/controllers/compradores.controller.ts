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
  CreateCompradorDTO,
  UpdateCompradorDTO,
} from 'src/operadores/dtos/compradores.dto';
import { CompradoresService } from 'src/operadores/services/compradores.service';

@ApiTags('Compradores')
@Controller('compradores')
export class CompradoresController {
  constructor(private compradoresService: CompradoresService) {}

  @Get(':id')
  getCompradorById(@Param('id', ParseIntPipe) id: number) {
    return this.compradoresService.findOne(id);
  }

  @ApiOperation({ summary: 'Catalogo de todos los Compradores' })
  @Get()
  findAll() {
    return this.compradoresService.findAll();
  }

  @Post()
  create(@Body() payload: CreateCompradorDTO) {
    return this.compradoresService.create(payload);
  }

  @Put(':id')
  updateComprador(
    @Param('id', ParseIntPipe) idComprador: number,
    @Body() body: UpdateCompradorDTO,
  ): any {
    return this.compradoresService.update(idComprador, body);
  }

  @Delete(':id')
  deleteComprador(@Param('id', ParseIntPipe) idComprador: number): any {
    return this.compradoresService.delete(idComprador);
  }
}
