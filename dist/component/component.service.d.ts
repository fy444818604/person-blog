import { Repository } from 'typeorm';
import { Components } from '../entity/components.entity';
import { SearchComponentDto } from './dto/search.component.dto';
import { CreateComponentDto } from './dto/create.component.dto';
export declare class ComponentService {
    private readonly components;
    constructor(components: Repository<Components>);
    componentSearch(searchComponentDto: SearchComponentDto): Promise<[Components[], number]>;
    componentAdd(createComponentDto: CreateComponentDto): Promise<Components>;
}
