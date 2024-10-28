import { PrimaryGeneratedColumn, Column } from 'typeorm';
import { Entity } from 'typeorm';

@Entity()
export class Fabricante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, unique: true })
  nombre: string;

  @Column({ type: 'varchar', length: 100 })
  direccion: string;

  @Column({ type: 'varchar', length: 75 })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  imagen: string;
}
