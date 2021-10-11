import { IUser } from './../../types/user/userEntity';
import { BaseEntity } from '../../baseClasses/baseEntity';
import { Column } from 'typeorm';

export class User extends BaseEntity implements IUser {
  @Column({ default: null })
  email: string;

  @Column({ default: null })
  pwd: string;

  @Column({ default: null })
  authToken: string;

  @Column({ default: null })
  registrationDate: Date;

  @Column({ default: null })
  registrationToken: string;
}
