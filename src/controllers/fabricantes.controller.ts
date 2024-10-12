import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { FabricantesService } from 'src/services/fabricantes.service';

@Controller('fabricantes')
export class FabricantesController {
  constructor(private fabricantesService: FabricantesService) {}

  @Get(':id')
  getFabricanteById(@Param('id') id: string) {
    return this.fabricantesService.findOne(+id);
  }

  @Get()
  findAll() {
    return this.fabricantesService.findAll();
  }

  @Post()
  create(@Body() payload: any) {
    return this.fabricantesService.create(payload);
  }

  @Put(':id')
  updateFabricante(@Param('id') idFabricante: string, @Body() body: any): any {
    return this.fabricantesService.update(+idFabricante, body);
  }

  @Delete(':id')
  deleteFabricante(@Param('id') idFabricante: string): any {
    return this.fabricantesService.delete(+idFabricante);
  }
}
