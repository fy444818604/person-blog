import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('components')
export class Components {
	@PrimaryGeneratedColumn('uuid')
	id: string;
	
	@Column({
    comment: '组件名'
  })
	title: string;
	
	@Column({
    comment: '组件描述'
  })
	describe: string;
	
	@Column({
    comment: '对应路由'
  })
	url: string;
	
	@CreateDateColumn()
	createTime: Date;
}