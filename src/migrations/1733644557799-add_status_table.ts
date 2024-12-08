import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AddStatusTable1733644557799 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'status',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true, 
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'name',
                        type: 'text',
                        isUnique: true, 
                    },
                    {
                        name: 'description',
                        type: 'text',
                        isNullable: true, 
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP', 
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP',
                        onUpdate: 'CURRENT_TIMESTAMP', 
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('status');
    }

}
