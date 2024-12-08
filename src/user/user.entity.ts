import { Gender } from "@src/common/enums";
import { RoleEntity } from "@src/role";
import { StatusEntity } from "@src/status";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('user')
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => RoleEntity, role => role.users)
    @JoinColumn({ name: 'role_id' })
    role: RoleEntity;

    @ManyToOne(() => StatusEntity, status => status.users)
    @JoinColumn({ name: 'status_id' })
    status: StatusEntity;

    @Column('text', { name: 'first_name' })
    firstName: string;

    @Column('text', { name: 'last_name' })
    lastName: string;

    @Column({ type: 'enum', enum: Gender, default: Gender.OTHER})
    gender: Gender;

    @Column('text', { unique: true, name: 'email' })
    email: string;

    @Column('text', { unique: true, name: 'username' })
    username: string;

    @Column('text', { name: 'password' })
    password: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', name: 'updated_at' })
    updatedAt: Date;

}
