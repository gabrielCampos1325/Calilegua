import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';
import { Entity } from 'typeorm';
import { Producto } from './producto.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class Fabricante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, unique: true })
  nombre: string;

  @Column({ type: 'varchar', length: 75 })
  pais: string;

  @Column({ type: 'varchar', length: 100 })
  direccion: string;

  @Column({ type: 'varchar', length: 75 })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  imagen: string;

  @Exclude()
  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @Exclude()
  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;

  @OneToMany(() => Producto, (product) => product.fabricante)
  products: Producto[];
}
