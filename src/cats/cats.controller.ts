import { Controller, Get, HttpCode, Post, Query, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Req() request: Request): string {
        return 'This action return all cats';
    }

    @Post()
    @HttpCode(204)
    create(): string {
        return 'This action create a new cats';
    }

    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' }
        }
    }
}
