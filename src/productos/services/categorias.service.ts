import { Injectable } from '@nestjs/common';
import {
  CreateCategoriaDTO,
  UpdateCategoriaDTO,
} from 'src/productos/dtos/categorias.dto';
import { categoria } from 'src/productos/entities/categoria.entity';

@Injectable()
export class CategoriasService {
  private idCont = 2;
  private categorias: categoria[] = [
    {
      id: 1,
      nombre: 'Categoria A',
    },
    {
      id: 2,
      nombre: 'Categoria B',
    },
  ];

  findOne(id: number) {
    const categoria = this.categorias.find((categoria) => categoria.id === id);
    if (!categoria) {
      throw new Error(`El categoria con id: #${id} no existe`);
    }
    return categoria;
  }

  findAll() {
    return this.categorias;
  }

  create(payload: CreateCategoriaDTO) {
    this.idCont++;
    const newCategoria = {
      id: this.idCont,
      ...payload,
    };
    this.categorias.push(newCategoria);
    return newCategoria;
  }

  update(id: number, payload: UpdateCategoriaDTO) {
    const index = this.categorias.findIndex((categoria) => categoria.id === id);
    if (index === -1) {
      throw new Error(`El categoria con id: #${id} no existe`);
    }
    this.categorias[index] = {
      ...this.categorias[index],
      ...payload,
    };
    return this.categorias[index];
  }

  delete(id: number) {
    const index = this.categorias.findIndex((categoria) => categoria.id === id);
    if (index === -1) {
      throw new Error(`El categoria con id: #${id} no existe`);
    }
    this.categorias.splice(index, 1);
    return true;
  }
}
