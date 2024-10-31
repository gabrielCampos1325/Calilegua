import {MigrationInterface, QueryRunner} from "typeorm";

export class inicio1730367517365 implements MigrationInterface {
    name = 'inicio1730367517365'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comprador" ("id" SERIAL NOT NULL, "nombre" character varying(100) NOT NULL, "apellido" character varying(100) NOT NULL, "telefono" character varying(100) NOT NULL, CONSTRAINT "PK_2174fea3473575f9d08507dbc78" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedido" ("id" SERIAL NOT NULL, "date" date NOT NULL, "operador" character varying(100) NOT NULL, "products" character varying(100) NOT NULL, CONSTRAINT "PK_af8d8b3d07fae559c37f56b3f43" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categoria" ("id" SERIAL NOT NULL, "nombre" character varying(100) NOT NULL, CONSTRAINT "UQ_6771d90221138c5bf48044fd73d" UNIQUE ("nombre"), CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "fabricante" ("id" SERIAL NOT NULL, "nombre" character varying(100) NOT NULL, "direccion" character varying(100) NOT NULL, "email" character varying(75) NOT NULL, "imagen" character varying(255) NOT NULL, CONSTRAINT "UQ_86a08872e8e5ca25e9a069145e2" UNIQUE ("nombre"), CONSTRAINT "PK_3e7c3d76edc644d8d7f8d9a4670" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "producto" ("id" SERIAL NOT NULL, "nombre" character varying(100) NOT NULL, "descripcion" text NOT NULL, "precio" numeric(10,2) NOT NULL, "stock" integer NOT NULL, "origen" character varying(255) NOT NULL, "imagen" character varying(255) NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_d86d179360134b4b74bda750664" UNIQUE ("nombre"), CONSTRAINT "PK_5be023b11909fe103e24c740c7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "producto"`);
        await queryRunner.query(`DROP TABLE "fabricante"`);
        await queryRunner.query(`DROP TABLE "categoria"`);
        await queryRunner.query(`DROP TABLE "pedido"`);
        await queryRunner.query(`DROP TABLE "comprador"`);
    }

}
