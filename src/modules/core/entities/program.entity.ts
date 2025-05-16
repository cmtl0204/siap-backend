import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from '@auth/entities';
import { ProjectEntity } from '@modules/core/entities/project.entity';

@Entity('programs', { schema: 'core' })
export class ProgramEntity {
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
  @OneToMany(() => ProjectEntity, (entity) => entity.program)
  project: ProjectEntity[];

  /** Foreign Keys **/

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
    name: 'executor_undersecretary',
    type: 'text',
    comment: 'Subsecretaría ejecutora',
  })
  executorUndersecretary: string;

  @Column({
    name: 'code',
    type: 'varchar',
    comment: '',
  })
  code: string;

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
