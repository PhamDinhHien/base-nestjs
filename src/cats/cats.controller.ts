import { Cat } from './interface/cat.interface';
import { CatsService } from './cats.service';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './dto/create-cat.dto';
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('cats')
export class CatsController {

    constructor(private catService: CatsService) {

    }

    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        this.catService.create(createCatDto);
    }
    // @Post()
    // create(@Res() res: Response) {
    //     return res.status(HttpStatus.CREATED).send();
    // }

    // @Get()
    // findAll(@Query() query: ListAllEntities): string {
    //     return `This action return all cats (limits: ${query.limit} items)`;
    // }
    @Get()
    async findAll(): Promise<Cat []> {
        return this.catService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} cat`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }
}
