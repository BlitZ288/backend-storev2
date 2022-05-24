import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1653376570816 implements MigrationInterface {
    name = 'migration1653376570816'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("name" character varying NOT NULL, "icon" character varying(50) NOT NULL, "img" character varying(50) NOT NULL, "counterOrder" integer NOT NULL, "parentName" character varying, CONSTRAINT "PK_23c05c292c439d77b0de816b500" PRIMARY KEY ("name"))`);
        await queryRunner.query(`CREATE TABLE "product" ("idProduct" SERIAL NOT NULL, "nameProduct" character varying NOT NULL, "cost" integer NOT NULL, "img" character varying NOT NULL, "counterOrder" integer NOT NULL, "quantityInWarehouse" integer NOT NULL, "categoryName" character varying, CONSTRAINT "PK_318999ba9feeaa49ff117c91f64" PRIMARY KEY ("idProduct"))`);
        await queryRunner.query(`CREATE TABLE "description" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "value" character varying, "prefix" character varying(15), "productIdProduct" integer, CONSTRAINT "PK_313ee7159517cb494d532ee5466" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_cdcc354c6119c66bd3070df495a" FOREIGN KEY ("parentName") REFERENCES "category"("name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_3feda63c129805f4cbb907b3f6c" FOREIGN KEY ("categoryName") REFERENCES "category"("name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "description" ADD CONSTRAINT "FK_a1b629974315dcdc6ecf5e6ea0a" FOREIGN KEY ("productIdProduct") REFERENCES "product"("idProduct") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "description" DROP CONSTRAINT "FK_a1b629974315dcdc6ecf5e6ea0a"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_3feda63c129805f4cbb907b3f6c"`);
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_cdcc354c6119c66bd3070df495a"`);
        await queryRunner.query(`DROP TABLE "description"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
