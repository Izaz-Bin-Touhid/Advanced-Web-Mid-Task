import { Body, Controller, Post } from '@nestjs/common';
import { FacultiesService } from './faculties.service.js';
import { CreateFacultyDto } from './dtos/create-faculty.dto.js';
import { Faculty } from './entities/faculty.entity.js';

@Controller('faculties')
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}

  @Post('create-faculty')
  async createFaculty(@Body() faculty: CreateFacultyDto): Promise<Faculty> {
    return await this.facultiesService.createFaculty(faculty);
  }
}
