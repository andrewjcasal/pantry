import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    findAll() {
        return this.itemsService.findAll();
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto) {
        return this.itemsService.create(createItemDto);
    }
}
