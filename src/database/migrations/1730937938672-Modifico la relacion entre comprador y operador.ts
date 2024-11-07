import { MigrationInterface, QueryRunner } from 'typeorm';

export class ModificoLaRelacionEntreCompradorYOperador1730937938672
  implements MigrationInterface
{
  name = 'ModificoLaRelacionEntreCompradorYOperador1730937938672';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "operador" ADD "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "operador" ADD "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(`ALTER TABLE "operador" ADD "compradorId" integer`);
    await queryRunner.query(
      `ALTER TABLE "operador" ADD CONSTRAINT "UQ_9a6bd793b4f149fb11d8692ed75" UNIQUE ("compradorId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "comprador" ADD "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "comprador" ADD "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "operador" ADD CONSTRAINT "FK_9a6bd793b4f149fb11d8692ed75" FOREIGN KEY ("compradorId") REFERENCES "comprador"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "operador" DROP CONSTRAINT "FK_9a6bd793b4f149fb11d8692ed75"`,
    );
    await queryRunner.query(`ALTER TABLE "comprador" DROP COLUMN "updateAt"`);
    await queryRunner.query(`ALTER TABLE "comprador" DROP COLUMN "createAt"`);
    await queryRunner.query(
      `ALTER TABLE "operador" DROP CONSTRAINT "UQ_9a6bd793b4f149fb11d8692ed75"`,
    );
    await queryRunner.query(`ALTER TABLE "operador" DROP COLUMN "compradorId"`);
    await queryRunner.query(`ALTER TABLE "operador" DROP COLUMN "updateAt"`);
    await queryRunner.query(`ALTER TABLE "operador" DROP COLUMN "createAt"`);
  }
}
