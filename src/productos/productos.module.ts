import { Module } from '@nestjs/common';
import { FabricantesController } from './controllers/fabricantes.controller';
import { CategoriasController } from './controllers/categorias.controller';
import { ProductosController } from './controllers/productos.controller';
import { CategoriasService } from './services/categorias.service';
import { FabricantesService } from './services/fabricantes.service';
import { ProductosService } from './services/productos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fabricante } from './entities/fabricante.entity';
import { Producto } from './entities/producto.entity';
import { Categoria } from './entities/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producto, Fabricante, Categoria])],
  controllers: [
    FabricantesController,
    ProductosController,
    CategoriasController,
  ],
  providers: [ProductosService, FabricantesService, CategoriasService],
  exports: [ProductosService],
})
export class ProductosModule {}
