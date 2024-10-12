import { Injectable } from '@nestjs/common';
import { Producto } from 'src/entities/producto.entity';

@Injectable()
export class ProductosService {
  private idCont = 2;
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
  ];

  findOne(id: number) {
    const product = this.productos.find((producto) => producto.id === id);
    if (!product) {
      throw new Error(`El producto con id: #${id} no existe`);
    }
    return product;
  }

  findAll() {
    return this.productos;
  }

  create(payload: any) {
    this.idCont++;
    const newProduct = {
      id: this.idCont,
      ...payload,
    };
    this.productos.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const index = this.productos.findIndex((producto) => producto.id === id);
    if (index === -1) {
      throw new Error(`El producto con id: #${id} no existe`);
    }
    this.productos[index] = {
      ...this.productos[index],
      ...payload,
    };
    return this.productos[index];
  }

  delete(id: number) {
    const index = this.productos.findIndex((producto) => producto.id === id);
    if (index === -1) {
      throw new Error(`El producto con id: #${id} no existe`);
    }
    this.productos.splice(index, 1);
    return true;
  }
}
