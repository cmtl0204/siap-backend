import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProgramEntity } from '@modules/core/entities/program.entity';
import { UserEntity } from '@auth/entities';

@Entity('projects', { schema: 'core' })
export class ProjectEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_timestampP',
    comment: 'Fecha de creacion del registro',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_timestampP',
    comment: 'Fecha de actualizacion de la ultima actualizacion del registro',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    comment: 'Fecha de eliminacion del registro',
  })
  deletedAt: Date;

  @Column({
    name: 'enabled',
    type: 'boolean',
    default: true,
    comment: 'true=visible, false=no visible',
  })
  enabled: boolean;

  /** Inverse Relationship **/

  /** Foreign Keys **/
  @ManyToOne(() => ProgramEntity, { nullable: true })
  @JoinColumn({ name: 'program_id' })
  program: ProgramEntity;
  @Column({
    type: 'uuid',
    name: 'program_id',
    nullable: true,
    comment: '',
  })
  programId: string;

  @ManyToOne(() => UserEntity, { nullable: true })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
  @Column({
    type: 'uuid',
    name: 'user_id',
    nullable: true,
    comment: '',
  })
  userId: string;

  /** Columns **/
  @Column({
    name: 'amount',
    type: 'decimal',
    precision: 20,
    scale: 2,
    nullable: true,
    comment: '',
  })
  amount: number;

  @Column({
    name: 'code',
    type: 'varchar',
    comment: '',
  })
  code: string;

  @Column({
    name: 'coexecutor_management',
    type: 'text',
    comment: 'Subsecretaría ejecutora',
  })
  coexecutorManagement: string;

  @Column({
    name: 'executor_management',
    type: 'text',
    comment: 'Subsecretaría ejecutora',
  })
  executorManagement: string;

  @Column({
    name: 'executor_undersecretary',
    type: 'text',
    comment: 'Subsecretaría ejecutora',
  })
  executorUndersecretary: string;

  @Column({
    name: 'ended_at',
    type: 'timestamp',
    comment: '',
  })
  endedAt: Date;

  @Column({
    name: 'name',
    type: 'varchar',
    comment: '',
  })
  name: string;

  @Column({
    name: 'started_at',
    type: 'timestamp',
    comment: '',
  })
  startedAt: Date;

  @Column({
    name: 'term',
    type: 'integer',
    comment: 'plazo en meses',
  })
  term: number;
}
