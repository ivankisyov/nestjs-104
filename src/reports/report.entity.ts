import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  // @Column()
  // year: number;

  // @Column()
  // lng: string;

  // @Column()
  // lat: string;

  // @Column()
  // make: string;

  // @Column()
  // model: string;

  // @Column()
  // mileage: number;

  // @ManyToOne('User', 'reports')
  // user: User;
}
