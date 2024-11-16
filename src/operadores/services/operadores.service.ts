import { Inject, Injectable } from '@nestjs/common';
import {
  CreateOperadorDTO,
  UpdateOperadorDTO,
} from 'src/operadores/dtos/operadores.dto';
import { Operador } from 'src/operadores/entities/operador.entity';
import { ProductosService } from 'src/productos/services/productos.service';
import { Pedido } from '../entities/pedido.entity';
import { ConfigService } from '@nestjs/config';
import { Client } from 'pg';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompradoresService } from './compradores.service';

@Injectable()
export class OperadoresService {
  constructor(
    private configService: ConfigService,
    @Inject('PG') private clientPg: Client,
    private productService: ProductosService,
    @InjectRepository(Operador)
    private operadorRepository: Repository<Operador>,
    private compradorService: CompradoresService,
  ) {}

  /*private idCont = 2;
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
  ];*/

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

  /*async getOrderByUser(id: number): Promise<Pedido> {
    const operador = await this.operadorRepository.findOne({ where: { id } });
    if (!operador) {
      throw new Error(`El operador con id: #${id} no existe`);
    }
    return {
      date: new Date(),
      operador,
      products: await this.productService.findAll(),
    };
  }*/

  findOne(id: number) {
    const operador = this.operadorRepository.findOne({
      where: { id },
      relations: ['comprador'],
    });
    if (!operador) {
      throw new Error(`El operador con id: #${id} no existe`);
    }
    return operador;
  }

  findAll() {
    return this.operadorRepository.find({
      relations: ['comprador'],
    });
  }

  async create(data: CreateOperadorDTO) {
    const newOperador = this.operadorRepository.create(data);
    if (data.compradorId) {
      const comprador = await this.compradorService.findOne(data.compradorId);
      newOperador.comprador = comprador;
    }
    return this.operadorRepository.save(newOperador);
  }

  async update(id: number, changes: UpdateOperadorDTO) {
    const operador = await this.operadorRepository.findOne({ where: { id } });
    if (changes.compradorId) {
      const nuevoComprador = await this.compradorService.findOne(
        changes.compradorId,
      );
      operador.comprador = nuevoComprador;
    }
    this.operadorRepository.merge(operador, changes);
    return this.operadorRepository.save(operador);
  }

  delete(id: number) {
    return this.operadorRepository.delete(id);
  }
}
