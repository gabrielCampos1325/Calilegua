import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateCompradorDTO,
  UpdateCompradorDTO,
} from 'src/operadores/dtos/compradores.dto';
import { Comprador } from 'src/operadores/entities/comprador.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompradoresService {
  constructor(
    @InjectRepository(Comprador)
    private compradorRepository: Repository<Comprador>,
  ) {}

  /*private idCont = 2;
  private compradores: Comprador[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Perez',
      telefono: '123456789',
    },
    {
      id: 2,
      nombre: 'Maria',
      apellido: 'Gomez',
      telefono: '987654321',
    },
  ];*/

  findOne(id: number) {
    const comprador = this.compradorRepository.findOne({ where: { id } });
    if (!comprador) {
      throw new Error(`El comprador con id: #${id} no existe`);
    }
    return comprador;
  }

  findAll() {
    return this.compradorRepository.find();
  }

  create(data: CreateCompradorDTO) {
    const newComprador = this.compradorRepository.create(data);
    return this.compradorRepository.save(newComprador);
  }

  async update(id: number, changes: UpdateCompradorDTO) {
    const comprador = await this.compradorRepository.findOne({ where: { id } });
    this.compradorRepository.merge(comprador, changes);
    return this.compradorRepository.save(comprador);
  }

  delete(id: number) {
    return this.compradorRepository.delete(id);
  }
}
