import { Injectable } from '@nestjs/common';
import { CreateOperadorDTO, UpdateOperadorDTO } from 'src/dtos/operadores.dto';
import { Operador } from 'src/entities/operador.entiy';

@Injectable()
export class OperadoresService {
  private idCont = 2;
  private operadores: Operador[] = [
    {
      id: 1,
      nombre: 'Operador A',
      apellido: 'Apellido Operador A',
      email: 'juan@gmail.com',
    },
    {
      id: 2,
      nombre: 'Operador B',
      apellido: 'Apellido Operador B',
      email: 'pedro@gmail.com',
    },
  ];

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
    const newProduct = {
      id: this.idCont,
      ...payload,
    };
    this.operadores.push(newProduct);
    return newProduct;
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
