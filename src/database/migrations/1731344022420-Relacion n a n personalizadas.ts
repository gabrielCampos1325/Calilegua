import {MigrationInterface, QueryRunner} from "typeorm";

export class RelacionNANPersonalizadas1731344022420 implements MigrationInterface {
    name = 'RelacionNANPersonalizadas1731344022420'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedido" ADD "operador" character varying(100)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedido" DROP COLUMN "operador"`);
    }

}
