import { Injectable } from '@nestjs/common';
import {
  CreateFabricanteDTO,
  UpdateFabricanteDTO,
} from 'src/dtos/fabricantes.dto';
import { Fabricante } from 'src/entities/fabricante.entity';

@Injectable()
export class FabricantesService {
  private idCont = 2;
  private fabricante: Fabricante[] = [
    {
      id: 1,
      nombre: 'Fabricante A',
      pais: 'China',
    },
    {
      id: 2,
      nombre: 'Fabricante B',
      pais: 'Argentina',
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
    const newProduct = {
      id: this.idCont,
      ...payload,
    };
    this.fabricante.push(newProduct);
    return newProduct;
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
