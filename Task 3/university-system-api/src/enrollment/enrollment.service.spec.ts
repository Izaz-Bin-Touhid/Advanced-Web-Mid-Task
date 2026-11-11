import { Test, TestingModule } from '@nestjs/testing';
import { EnrollmentService } from './enrollment.service.js';
import { CourseModule } from '../course/course.module.js';

describe('EnrollmentService', () => {
  let service: EnrollmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CourseModule],
      providers: [EnrollmentService],
    }).compile();

    service = module.get<EnrollmentService>(EnrollmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
