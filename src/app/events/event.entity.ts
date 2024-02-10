import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'eventos' })
export class EventEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  dateStart: Date;

  @Column()
  dateEnd: Date;

  @Column()
  location: string;

  @Column()
  group: string;
}
