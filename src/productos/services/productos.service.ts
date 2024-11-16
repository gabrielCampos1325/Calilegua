import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateProductDTO,
  FilterProductsDTO,
  UpdateProductDTO,
} from 'src/productos/dtos/products.dto';
import { Producto } from 'src/productos/entities/producto.entity';
import { Between, FindConditions, Repository } from 'typeorm';
import { FabricantesService } from './fabricantes.service';
import { Categoria } from '../entities/categoria.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
    private fabricantesService: FabricantesService,
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
    const product = this.productoRepository.findOne({
      where: { id },
      relations: ['fabricante', 'categorias'],
    });
    if (!product) {
      throw new Error(`El producto con id: #${id} no existe`);
    }
    return product;
  }

  findAll(params?: FilterProductsDTO) {
    if (params) {
      const where: FindConditions<Producto> = {};
      const { limit, offset } = params;
      const { precioMinimo, precioMaximo } = params;
      if (precioMinimo && precioMaximo) {
        where.precio = Between(precioMinimo, precioMaximo);
      }
      return this.productoRepository.find({
        relations: ['fabricante', 'categorias'],
        where,
        take: limit,
        skip: offset,
      });
    }
    return this.productoRepository.find({
      relations: ['fabricante', 'categorias'],
    });
  }

  async create(data: CreateProductDTO) {
    const newProduct = this.productoRepository.create(data);
    if (data.fabricanteId) {
      const fabricante = await this.fabricantesService.findOne(
        data.fabricanteId,
      );
      newProduct.fabricante = fabricante;
    }
    if (data.categoriasId) {
      const categorias = await this.categoriaRepository.findByIds(
        data.categoriasId,
      );
      newProduct.categorias = categorias;
    }
    return this.productoRepository.save(newProduct);
  }

  async update(id: number, changes: UpdateProductDTO) {
    const product = await this.productoRepository.findOne({ where: { id } });
    if (changes.fabricanteId) {
      const fabricante = await this.fabricantesService.findOne(
        changes.fabricanteId,
      );
      product.fabricante = fabricante;
    }
    if (changes.categoriasId) {
      const categorias = await this.categoriaRepository.findByIds(
        changes.categoriasId,
      );
      product.categorias = categorias;
    }
    this.productoRepository.merge(product, changes);
    return this.productoRepository.save(product);
  }

  async removeCategoryByProduct(productId: number, categoryId: number) {
    const product = await this.productoRepository.findOne({
      where: { id: productId },
      relations: ['categorias'],
    });
    product.categorias = product.categorias.filter(
      (category) => category.id !== categoryId,
    );
    return this.productoRepository.save(product);
  }

  async addCategoryByProduct(productId: number, categoryId: number) {
    const product = await this.productoRepository.findOne({
      where: { id: productId },
      relations: ['categorias'],
    });
    const category = await this.categoriaRepository.findOne({
      where: { id: categoryId },
    });
    product.categorias.push(category);
    return this.productoRepository.save(product);
  }

  delete(id: number) {
    return this.productoRepository.delete(id);
  }
}
