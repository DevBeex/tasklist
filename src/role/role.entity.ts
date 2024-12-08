import { UserEntity } from "@src/user";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('role')
export class RoleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', { unique: true, name: 'name' })
    name: string;

    @Column('text', { name: 'description', nullable: true })
    description: string;

    @OneToMany(() => UserEntity, user => user.role)
    users: UserEntity[];

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', name: 'updated_at' })
    updatedAt: Date;
}