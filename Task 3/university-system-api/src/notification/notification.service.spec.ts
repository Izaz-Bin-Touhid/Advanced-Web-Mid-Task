import { Test, TestingModule } from '@nestjs/testing';
import { NotificationService } from './notification.service.js';
import { NotificationModule } from './notification.module.js';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [NotificationModule],
    }).compile();

    service = module.get<NotificationService>(NotificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
