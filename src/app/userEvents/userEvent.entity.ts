import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'eventos por usuario' })
export class EventEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  User_id: string;

  @Column()
  Events_id: string;

  @Column()
  Activities_id: string;
}
