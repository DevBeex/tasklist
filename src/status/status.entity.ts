import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { UserEntity } from "@common/entities";  

@Entity('status')
export class StatusEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', { unique: true, name: 'name' })
    name: string;

    @Column('text', { name: 'description', nullable: true })
    description: string;

    @OneToMany(() => UserEntity, user => user.status)
    users: UserEntity[];

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', name: 'updated_at' })
    updatedAt: Date;
}
