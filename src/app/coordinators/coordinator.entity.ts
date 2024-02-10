import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'coordenadores' })
export class CoordinatorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  User_id: string;
}
