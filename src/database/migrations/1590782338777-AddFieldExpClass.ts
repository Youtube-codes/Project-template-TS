import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AddFieldExpClass1590782338777
  implements MigrationInterface {
  name = 'AddFieldExpClass1590782338777';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "class" ADD "exp" integer NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "class" DROP COLUMN "exp"`);
  }
}
