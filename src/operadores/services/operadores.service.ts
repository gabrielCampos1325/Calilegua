import { Inject, Injectable } from '@nestjs/common';
import {
  CreateOperadorDTO,
  UpdateOperadorDTO,
} from 'src/operadores/dtos/operadores.dto';
import { Operador } from 'src/operadores/entities/operador.entiy';
import { ProductosService } from 'src/productos/services/productos.service';
import { Pedido } from '../entities/pedido.entity';
import { ConfigService } from '@nestjs/config';
import { Client } from 'pg';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OperadoresService {
  constructor(
    private configService: ConfigService,
    @Inject('PG') private clientPg: Client,
    private productService: ProductosService,
    @InjectRepository(Operador)
    private operadorRepository: Repository<Operador>,
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

  getTasks() {
    return new Promise((resolve, reject) => {
      this.clientPg.query(
        'SELECT * FROM tareas ORDER BY id ASC',
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res.rows);
        },
      );
    });
  }

  async getOrderByUser(id: number): Promise<Pedido> {
    const operador = this.operadores.find((operador) => operador.id === id);
    if (!operador) {
      throw new Error(`El operador con id: #${id} no existe`);
    }
    return {
      id: this.idCont++,
      date: new Date(),
      operador,
      products: await this.productService.findAll(),
    };
  }

  findOne(id: number) {
    const operador = this.operadorRepository.findOneBy({ id });
    if (!operador) {
      throw new Error(`El operador con id: #${id} no existe`);
    }
    return operador;
  }

  findAll() {
    return this.operadorRepository.find();
  }

  create(data: CreateOperadorDTO) {
    const newOperador = this.operadorRepository.create(data);
    return this.operadorRepository.save(newOperador);
  }

  async update(id: number, changes: UpdateOperadorDTO) {
    const operador = await this.operadorRepository.findOneBy({ id });
    this.operadorRepository.merge(operador, changes);
    return this.operadorRepository.save(operador);
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
