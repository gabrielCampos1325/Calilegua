import { Inject, Injectable } from '@nestjs/common';
import {
  CreateOperadorDTO,
  UpdateOperadorDTO,
} from 'src/operadores/dtos/operadores.dto';
import { Operador } from 'src/operadores/entities/operador.entiy';
import { ProductosService } from 'src/productos/services/productos.service';
import { Pedido } from '../entities/pedido.entity';

@Injectable()
export class OperadoresService {
  constructor(
    private productService: ProductosService,
    @Inject('APIKEY') private apiKey: string, // GlobalModule Database
  ) {}

  private idCont = 2;
  private operadores: Operador[] = [
    {
      id: 1,
      email: 'juan@gmail.com',
      password: '123456',
      role: 'role1',
    },
    {
      id: 2,
      email: 'pedro@gmail.com',
      password: '789456',
      role: 'role2',
    },
  ];

  getOrderByUser(id: number): Pedido {
    const operador = this.findOne(id);
    return {
      date: new Date(),
      operador,
      products: this.productService.findAll(),
    };
  }

  findOne(id: number) {
    const operador = this.operadores.find((operador) => operador.id === id);
    if (!operador) {
      throw new Error(`El operador con id: #${id} no existe`);
    }
    return operador;
  }

  findAll() {
    return this.operadores;
  }

  create(payload: CreateOperadorDTO) {
    this.idCont++;
    const newOperador = {
      id: this.idCont,
      ...payload,
    };
    this.operadores.push(newOperador);
    return newOperador;
  }

  update(id: number, payload: UpdateOperadorDTO) {
    const index = this.operadores.findIndex((operador) => operador.id === id);
    if (index === -1) {
      throw new Error(`El operador con id: #${id} no existe`);
    }
    this.operadores[index] = {
      ...this.operadores[index],
      ...payload,
    };
    return this.operadores[index];
  }

  delete(id: number) {
    const index = this.operadores.findIndex((operador) => operador.id === id);
    if (index === -1) {
      throw new Error(`El operador con id: #${id} no existe`);
    }
    this.operadores.splice(index, 1);
    return true;
  }
}
