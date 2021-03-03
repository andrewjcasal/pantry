import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Item)
        private readonly itemRepository: Repository<Item>,
    ) {}

    findAll() {
        return this.itemRepository.find();
    }

    create(createItemDto: CreateItemDto) {
        const item = this.itemRepository.create(createItemDto);
        return this.itemRepository.save(item);
    }
}
