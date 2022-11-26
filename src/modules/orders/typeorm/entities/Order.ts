import Customer from '@modules/customers/typeorm/entities/Customer';
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'

@Entity('orders')
export default class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer

  @CreateDateColumn('')
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}