import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'atividades' })
export class ActivityEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  speaker: string;

  @Column()
  dateStart: Date;

  @Column()
  dateEnd: Date;

  @Column()
  startTime: Date;

  @Column()
  duration: string;

  @Column()
  location: string;

  @Column()
  category: string;

  @Column()
  status: boolean;

  @Column({ nullable: true })
  event_id?: string | null;

  @Column()
  subscribersLimit: number;
}
