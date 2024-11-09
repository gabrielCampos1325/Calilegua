import { MigrationInterface, QueryRunner } from 'typeorm';

export class AgregoRelacionMuchosAMuchosEntreCategoriasYProductos1731073050357
  implements MigrationInterface
{
  name = 'AgregoRelacionMuchosAMuchosEntreCategoriasYProductos1731073050357';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "categorias_productos" ("categoriaId" integer NOT NULL, "productoId" integer NOT NULL, CONSTRAINT "PK_3c9e7c118edee221c24ca7a8030" PRIMARY KEY ("categoriaId", "productoId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_f80e444e2b67f983b4c0234f0d" ON "categorias_productos" ("categoriaId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a8a00c99a0afddfdb80cb09aba" ON "categorias_productos" ("productoId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "categorias_productos" ADD CONSTRAINT "FK_f80e444e2b67f983b4c0234f0d6" FOREIGN KEY ("categoriaId") REFERENCES "categoria"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "categorias_productos" ADD CONSTRAINT "FK_a8a00c99a0afddfdb80cb09aba2" FOREIGN KEY ("productoId") REFERENCES "producto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "categorias_productos" DROP CONSTRAINT "FK_a8a00c99a0afddfdb80cb09aba2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "categorias_productos" DROP CONSTRAINT "FK_f80e444e2b67f983b4c0234f0d6"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_a8a00c99a0afddfdb80cb09aba"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_f80e444e2b67f983b4c0234f0d"`,
    );
    await queryRunner.query(`DROP TABLE "categorias_productos"`);
  }
}
