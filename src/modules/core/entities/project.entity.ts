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
import { CatalogueEntity } from '@modules/common/catalogue/catalogue.entity';
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
    name: 'area',
    type: 'text',
    comment: '',
  })
  area: string;

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
    name: 'program',
    type: 'text',
    comment: '',
  })
  program: string;

  @Column({
    name: 'program_code',
    type: 'varchar',
    comment: '',
  })
  programCode: string;

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

  @Column({
    name: 'unit',
    type: 'text',
    comment: '',
  })
  unit: string;
}
