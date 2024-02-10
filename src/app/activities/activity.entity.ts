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
  dateStart: Date;

  @Column()
  dateEnd: Date;

  @Column()
  location: string;

  @Column()
  category: string;

  @Column()
  Event_id: string;
}
