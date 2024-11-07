import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateFabricanteDTO,
  UpdateFabricanteDTO,
} from 'src/productos/dtos/fabricantes.dto';
import { Fabricante } from 'src/productos/entities/fabricante.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FabricantesService {
  constructor(
    @InjectRepository(Fabricante)
    private fabricanteRepository: Repository<Fabricante>,
  ) {}

  /*private idCont = 2;
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
  ];*/

  findOne(id: number) {
    const fabricante = this.fabricanteRepository.findOne({
      where: { id },
      relations: ['products'],
    });
    if (!fabricante) {
      throw new Error(`El fabricante con id: #${id} no existe`);
    }
    return fabricante;
  }

  findAll() {
    return this.fabricanteRepository.find({
      relations: ['products'],
    });
  }

  create(data: CreateFabricanteDTO) {
    const newFabricante = this.fabricanteRepository.create(data);
    return this.fabricanteRepository.save(newFabricante);
  }

  async update(id: number, changes: UpdateFabricanteDTO) {
    const fabricante = await this.fabricanteRepository.findOne({
      where: { id },
    });
    this.fabricanteRepository.merge(fabricante, changes);
    return this.fabricanteRepository.save(fabricante);
  }

  delete(id: number) {
    return this.fabricanteRepository.delete(id);
  }
}
