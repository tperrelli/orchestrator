import  { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_sessions')
export default class UserSession {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('char', { length: 36 })
  user_id: string;

  @CreateDateColumn()
  created_at: string;

  @CreateDateColumn()
  expires_at: string;
}