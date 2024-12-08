import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddRoleTable1733644061146 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'role',
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
        await queryRunner.dropTable('role');
    }
}
