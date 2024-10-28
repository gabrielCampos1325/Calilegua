import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Comprador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 100 })
  apellido: string;

  @Column({ type: 'varchar', length: 100 })
  telefono: string;
}
