import { Operador } from './operador.entity';
import { Producto } from '../../productos/entities/producto.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'varchar', length: 100 })
  operador: Operador;

  @Column({ type: 'varchar', length: 100 })
  products: Producto[];
}
