import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class AddUserTable1733644844672 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: 'role_id',
                        type: 'int',
                    },
                    {
                        name: 'status_id',
                        type: 'int',
                    },
                    {
                        name: 'first_name',
                        type: 'text',
                    },
                    {
                        name: 'last_name',
                        type: 'text',
                    },
                    {
                        name: 'gender',
                        type: 'enum',
                        enum: ['Male', 'Female', 'Other'],
                        default: `'Other'`, // Valor por defecto
                    },
                    {
                        name: 'email',
                        type: 'text',
                        isUnique: true, // El email debe ser único
                    },
                    {
                        name: 'username',
                        type: 'text',
                        isUnique: true, // El username debe ser único
                    },
                    {
                        name: 'password',
                        type: 'text',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP', // Fecha de creación
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP',
                        onUpdate: 'CURRENT_TIMESTAMP', // Fecha de última actualización
                    },
                ],
            }),
        );

        // Crear las claves foráneas
        await queryRunner.createForeignKey(
            'user',
            new TableForeignKey({
                columnNames: ['role_id'],
                referencedTableName: 'role',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'user',
            new TableForeignKey({
                columnNames: ['status_id'],
                referencedTableName: 'status',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
         const table = await queryRunner.getTable('user');
         const roleForeignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('role_id') !== -1);
         const statusForeignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('status_id') !== -1);
         await queryRunner.dropForeignKey('user', roleForeignKey);
         await queryRunner.dropForeignKey('user', statusForeignKey);
         await queryRunner.dropTable('user');
     
    }

}
