import { ComponentService } from './component.service';
import { Components } from '../entity/components.entity';
import { SearchComponentDto } from './dto/search.component.dto';
import { CreateComponentDto } from './dto/create.component.dto';
export declare class ComponentController {
    private readonly componentService;
    constructor(componentService: ComponentService);
    findComponent(searchComponentDto: SearchComponentDto): Promise<[Components[], number]>;
    addComponent(createComponentDto: CreateComponentDto): Promise<Components>;
}
