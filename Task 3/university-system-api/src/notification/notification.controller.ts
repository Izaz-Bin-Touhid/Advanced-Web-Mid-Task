import { Body, Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service.js';

@Controller('notification')
export class NotificationController {
  constructor(
    private readonly notificationService: NotificationService,
  ) {}

  @Post('send')
  sendNotification(@Body() notification: any) {
    return this.notificationService.sendNotification(
      notification.studentName,
      notification.message,
    );
  }

  @Post('check')
  checkEnrollmentAndNotify(@Body() enrollment: any) {
    return this.notificationService.checkEnrollmentAndNotify(
      enrollment.studentName,
      enrollment.courseId,
    );
  }
}
