import { Module } from '@nestjs/common';
import { ComponentController } from './component.controller';
import { ComponentService } from './component.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Components } from '../entity/components.entity'

@Module({
	imports:[
		TypeOrmModule.forFeature([Components]),
	],
  controllers: [ComponentController],
  providers: [ComponentService]
})
export class ComponentModule {}
