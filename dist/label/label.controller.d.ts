import { LabelService } from './label.service';
import { Label } from '../entity/label.entity';
import { CreateLabelDto } from './dto/create.label.dto';
export declare class LabelController {
    private readonly labelService;
    constructor(labelService: LabelService);
    findLabel(): Promise<Label[]>;
    addLabel(createLabelDto: CreateLabelDto): Promise<Label>;
}
