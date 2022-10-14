import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: string;

    @Column({unique: true})
  username: string;

  @Column({nullable: true})
  displayName: string;
}