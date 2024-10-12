import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { CompradoresService } from 'src/services/compradores.service';

@Controller('compradores')
export class CompradoresController {
  constructor(private compradoresService: CompradoresService) {}

  @Get(':id')
  getCompradorById(@Param('id') id: string) {
    return this.compradoresService.findOne(+id);
  }

  @Get()
  findAll() {
    return this.compradoresService.findAll();
  }

  @Post()
  create(@Body() payload: any) {
    return this.compradoresService.create(payload);
  }

  @Put(':id')
  updateComprador(@Param('id') idComprador: string, @Body() body: any): any {
    return this.compradoresService.update(+idComprador, body);
  }

  @Delete(':id')
  deleteComprador(@Param('id') idComprador: string): any {
    return this.compradoresService.delete(+idComprador);
  }
}
