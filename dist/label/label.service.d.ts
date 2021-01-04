import { Repository } from 'typeorm';
import { Label } from '../entity/label.entity';
import { CreateLabelDto } from './dto/create.label.dto';
export declare class LabelService {
    private readonly label;
    constructor(label: Repository<Label>);
    labelSearch(): Promise<Label[]>;
    labelSearchOne(id: string): Promise<Label>;
    labelAdd(createLabelDto: CreateLabelDto): Promise<Label>;
    labelUpdate(id: string, createLabelDto: CreateLabelDto): Promise<Label>;
}
