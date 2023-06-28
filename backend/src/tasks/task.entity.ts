import { Entity, PrimaryGeneratedColumn, Column,ManyToOne} from 'typeorm';
import { AppEntity } from '../app.entity';
@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => AppEntity, app => app.tasks)
  app: AppEntity;
}








