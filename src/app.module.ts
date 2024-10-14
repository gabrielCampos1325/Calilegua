import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FabricantesController } from './productos/controllers/fabricantes.controller';
import { ProductosController } from './productos/controllers/productos.controller';
import { PedidosController } from './operadores/controllers/pedidos.controller';
import { OperadoresController } from './operadores/controllers/operadores.controller';
import { CompradoresController } from './operadores/controllers/compradores.controller';
import { CategoriasController } from './productos/controllers/categorias.controller';
import { ProductosService } from './productos/services/productos.service';
import { PedidosService } from './operadores/services/pedidos.service';
import { OperadoresService } from './operadores/services/operadores.service';
import { FabricantesService } from './productos/services/fabricantes.service';
import { CompradoresService } from './operadores/services/compradores.service';
import { CategoriasService } from './productos/services/categorias.service';
import { OperadoresModule } from './operadores/operadores.module';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [OperadoresModule, ProductosModule],
  controllers: [
    AppController,
    FabricantesController,
    ProductosController,
    PedidosController,
    OperadoresController,
    CompradoresController,
    CategoriasController,
  ],
  providers: [
    AppService,
    ProductosService,
    PedidosService,
    OperadoresService,
    FabricantesService,
    CompradoresService,
    CategoriasService,
  ],
})
export class AppModule {}
