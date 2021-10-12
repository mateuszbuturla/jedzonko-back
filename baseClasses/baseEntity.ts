import {
  BaseEntity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export abstract class MyBaseEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
