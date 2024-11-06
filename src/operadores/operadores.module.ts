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

@Module({
  imports: [
    ProductosModule,
    TypeOrmModule.forFeature([Operador, Comprador, Pedido]),
  ],
  controllers: [PedidosController, OperadoresController, CompradoresController],
  providers: [PedidosService, OperadoresService, CompradoresService],
})
export class OperadoresModule {}
