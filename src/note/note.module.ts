import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { Note } from '../entity/note.entity';
import { NoteImage } from '../entity/note.image.entity'
import { Label } from '../entity/label.entity'

@Module({
	imports:[
		TypeOrmModule.forFeature([Note,Label]),
		TypeOrmModule.forFeature([NoteImage]),
	],
  controllers: [NoteController],
  providers: [NoteService]
})
export class NoteModule {}
