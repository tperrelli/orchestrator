import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex } from "typeorm";

export class userSessions1643834586160 implements MigrationInterface {

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
            length: "36",
            name: "user_id",
            type: "char"
          },
          {
            default: "now()",
            name: "created_at",
            type: "timestamp"
          },
          {
            default: "now()",
            name: "expires_at",
            type: "timestamp"
          }
        ],
        name: "user_sessions"
      })
    );

    await queryRunner.createForeignKey(
      "user_sessions",
      new TableForeignKey({
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users"
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user_sessions");
  }

}
