import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('faculties')
export class Faculty {
  @PrimaryColumn({
    length: 20,
    type: 'varchar',
  })
  Id: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  Name: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  expertise: string;

  @Column({
    type: 'int',
  })
  noOfPublication: number;
}
