import { Injectable } from '@nestjs/common';
import {
  CreateCompradorDTO,
  UpdateCompradorDTO,
} from 'src/operadores/dtos/compradores.dto';
import { Comprador } from 'src/operadores/entities/comprador.entity';

@Injectable()
export class CompradoresService {
  private idCont = 2;
  private compradores: Comprador[] = [
    {
      id: 1,
      nombre: 'Juan Perez',
      direccion: 'Calle 123',
    },
    {
      id: 2,
      nombre: 'Maria Lopez',
      direccion: 'Calle 456',
    },
  ];

  findOne(id: number) {
    const comprador = this.compradores.find((comprador) => comprador.id === id);
    if (!comprador) {
      throw new Error(`El comprador con id: #${id} no existe`);
    }
    return comprador;
  }

  findAll() {
    return this.compradores;
  }

  create(payload: CreateCompradorDTO) {
    this.idCont++;
    const newProduct = {
      id: this.idCont,
      ...payload,
    };
    this.compradores.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateCompradorDTO) {
    const index = this.compradores.findIndex(
      (comprador) => comprador.id === id,
    );
    if (index === -1) {
      throw new Error(`El comprador con id: #${id} no existe`);
    }
    this.compradores[index] = {
      ...this.compradores[index],
      ...payload,
    };
    return this.compradores[index];
  }

  delete(id: number) {
    const index = this.compradores.findIndex(
      (comprador) => comprador.id === id,
    );
    if (index === -1) {
      throw new Error(`El comprador con id: #${id} no existe`);
    }
    this.compradores.splice(index, 1);
    return true;
  }
}
