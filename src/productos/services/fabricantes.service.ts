import { Injectable } from '@nestjs/common';
import {
  CreateFabricanteDTO,
  UpdateFabricanteDTO,
} from 'src/productos/dtos/fabricantes.dto';
import { Fabricante } from 'src/productos/entities/fabricante.entity';

@Injectable()
export class FabricantesService {
  private idCont = 2;
  private fabricante: Fabricante[] = [
    {
      id: 1,
      nombre: 'Fabricante A',
      direccion: 'Calle 123',
      email: 'fabricantea@gmail.com',
      imagen: 'https://placeimgb.com',
    },
    {
      id: 2,
      nombre: 'Fabricante B',
      direccion: 'Calle 456',
      email: 'fabricanteb@gmail.com',
      imagen: 'https://placeimga.com',
    },
  ];

  findOne(id: number) {
    const fabricante = this.fabricante.find(
      (fabricante) => fabricante.id === id,
    );
    if (!fabricante) {
      throw new Error(`El fabricante con id: #${id} no existe`);
    }
    return fabricante;
  }

  findAll() {
    return this.fabricante;
  }

  create(payload: CreateFabricanteDTO) {
    this.idCont++;
    const newFabricante = {
      id: this.idCont,
      ...payload,
    };
    this.fabricante.push(newFabricante);
    return newFabricante;
  }

  update(id: number, payload: UpdateFabricanteDTO) {
    const index = this.fabricante.findIndex(
      (fabricante) => fabricante.id === id,
    );
    if (index === -1) {
      throw new Error(`El fabricante con id: #${id} no existe`);
    }
    this.fabricante[index] = {
      ...this.fabricante[index],
      ...payload,
    };
    return this.fabricante[index];
  }

  delete(id: number) {
    const index = this.fabricante.findIndex(
      (fabricante) => fabricante.id === id,
    );
    if (index === -1) {
      throw new Error(`El fabricante con id: #${id} no existe`);
    }
    this.fabricante.splice(index, 1);
    return true;
  }
}
