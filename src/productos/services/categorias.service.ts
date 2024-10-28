import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateCategoriaDTO,
  UpdateCategoriaDTO,
} from 'src/productos/dtos/categorias.dto';
import { Categoria } from 'src/productos/entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  private idCont = 2;
  private categorias: Categoria[] = [
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
    const product = this.categoriaRepository.findOneBy({ id });
    if (!product) {
      throw new Error(`El producto con id: #${id} no existe`);
    }
    return product;
  }

  findAll() {
    return this.categoriaRepository.find();
  }

  create(data: CreateCategoriaDTO) {
    const newCategoria = this.categoriaRepository.create(data);
    return this.categoriaRepository.save(newCategoria);
  }

  async update(id: number, changes: UpdateCategoriaDTO) {
    const categoria = await this.categoriaRepository.findOneBy({ id });
    this.categoriaRepository.merge(categoria, changes);
    return this.categoriaRepository.save(categoria);
  }

  delete(id: number) {
    this.categoriaRepository.delete(id);
  }
}
