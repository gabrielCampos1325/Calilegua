import { Module } from '@nestjs/common';
import { CompradoresController } from './controllers/compradores.controller';
import { OperadoresController } from './controllers/operadores.controller';
import { PedidosController } from './controllers/pedidos.controller';
import { CompradoresService } from './services/compradores.service';
import { OperadoresService } from './services/operadores.service';
import { PedidosService } from './services/pedidos.service';
import { ProductosModule } from 'src/productos/productos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comprador } from './entities/comprador.entity';
import { Operador } from './entities/operador.entity';
import { Pedido } from './entities/pedido.entity';
import { DetallePedido } from './entities/detallePedido.entity';
import { DetallePedidoController } from './controllers/detalle-pedido.controller';
import { DetallePedidoService } from './services/detalle-pedido.service';
import { Producto } from 'src/productos/entities/producto.entity';

@Module({
  imports: [
    ProductosModule,
    TypeOrmModule.forFeature([
      Operador,
      Comprador,
      Pedido,
      DetallePedido,
      Producto,
    ]),
  ],
  controllers: [
    PedidosController,
    OperadoresController,
    CompradoresController,
    DetallePedidoController,
  ],
  providers: [
    PedidosService,
    OperadoresService,
    CompradoresService,
    DetallePedidoService,
  ],
})
export class OperadoresModule {}
