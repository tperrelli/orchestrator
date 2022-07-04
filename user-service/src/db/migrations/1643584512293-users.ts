import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class users1643584512293 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        columns: [
          {
            isPrimary: true,
            length: "36",
            name: "id",
            type: "char"
          },
          {
            length: "150",
            name: "name",
            type: "varchar"
          },
          {
            length: "25",
            name: "username",
            type: "varchar",
          },
          {
            length: "150",
            name: "password",
            type: "varchar"
          },
          {
            default: "now()",
            name: "createdAt",
            type: "timestamp"
          },
          {
            name: "updatedAt",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "deletedAt",
            type: "timestamp",
            isNullable: true,
          }
        ],
        name: "users"
      })
    );

    await queryRunner.createIndex(
      "users",
      new TableIndex({
        columnNames: ["username"],
        isUnique: true,
        name: "unique_username"
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
