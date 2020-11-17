import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createAldeias1605544330813 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'aldeias',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'latitude',
                    type: 'varchar'
                },
                {
                    name: 'longitude',
                    type: 'varchar'
                },
                {
                    name: 'continente',
                    type: 'varchar'
                },
                {
                    name: 'user_id',
                    type: 'integer',
                    unsigned: true
                }
            ],
            foreignKeys: [
                {
                    name: 'AldeiaUser',
                    columnNames: ['user_id'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('aldeias')
    }

}
