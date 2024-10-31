import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateProductDTO,
  UpdateProductDTO,
} from 'src/productos/dtos/products.dto';
import { Producto } from 'src/productos/entities/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {}

  /*private idCont = 2;
  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Prod A',
      descripcion: 'Descripcion producto A',
      precio: 6500,
      stock: 1,
      origen: 'China',
      imagen: '',
    },
    {
      id: 2,
      nombre: 'Prod B',
      descripcion: 'Descripcion producto B',
      precio: 7500,
      stock: 1,
      origen: 'Japon',
      imagen: '',
    },
  ];*/

  findOne(id: number) {
    const product = this.productoRepository.findOne({ where: { id } });
    if (!product) {
      throw new Error(`El producto con id: #${id} no existe`);
    }
    return product;
  }

  findAll() {
    return this.productoRepository.find();
  }

  create(data: CreateProductDTO) {
    const newProduct = this.productoRepository.create(data);
    return this.productoRepository.save(newProduct);
  }

  async update(id: number, changes: UpdateProductDTO) {
    const product = await this.productoRepository.findOne({ where: { id } });
    this.productoRepository.merge(product, changes);
    return this.productoRepository.save(product);
  }

  delete(id: number) {
    return this.productoRepository.delete(id);
  }
}
