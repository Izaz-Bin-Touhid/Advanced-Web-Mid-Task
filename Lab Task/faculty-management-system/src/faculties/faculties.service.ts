import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Faculty } from './entities/faculty.entity.js';
import { CreateFacultyDto } from './dtos/create-faculty.dto.js';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculty)
    private readonly facultiesRepo: Repository<Faculty>,
  ) {}

  async createFaculty(faculty: CreateFacultyDto): Promise<Faculty> {
    console.log(faculty);
    try {
      const facultyEntity = await this.facultiesRepo.create(faculty);
      return await this.facultiesRepo.save(facultyEntity);
    } catch {
      throw new BadRequestException('Failed');
    }
  }
}
