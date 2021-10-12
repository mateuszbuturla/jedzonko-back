import { IUser } from './../../types/user/user.entity';
import { MyBaseEntity } from '../../baseClasses/BaseEntity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends MyBaseEntity implements IUser {
  @Column({ default: '' })
  email: string;

  @Column({ default: '' })
  pwd: string;

  @Column({ default: '' })
  loginToken: string;

  @Column({ default: '' })
  registerToken: string;

  @Column({ default: '' })
  resetPasswordToken: string;
}
