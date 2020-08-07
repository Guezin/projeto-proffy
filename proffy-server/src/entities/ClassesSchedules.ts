import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import Class from './Class';

@Entity('classes_schedules')
class ClassesSchedules {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  week_day: number;

  @Column()
  from: number;

  @Column()
  to: number;

  @OneToOne(() => Class)
  @JoinColumn({ name: 'class_id' })
  @Column()
  class_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ClassesSchedules;
