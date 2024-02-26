import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'eventos por usuario' })
export class UserEventEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @Column()
  activity_id: string;
}
