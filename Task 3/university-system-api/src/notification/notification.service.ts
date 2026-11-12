import { Injectable, Inject, forwardRef } from '@nestjs/common';
import * as Enrollment from '../enrollment/enrollment.service.js';
import type { EnrollmentService } from '../enrollment/enrollment.service.js';

@Injectable()
export class NotificationService {
  constructor(
    @Inject(forwardRef(() => Enrollment.EnrollmentService))
    private readonly enrollmentService: EnrollmentService,
  ) {}

  sendNotification(studentName: string, message: string) {
    return {
      message: 'Notification sent successfully',
      student: studentName,
      notification: message,
    };
  }

  checkEnrollmentAndNotify(studentName: string, courseId: string) {
    const enrollments = this.enrollmentService.getEnrollments();

    const notification = this.sendNotification(
      studentName,
      'Enrollment checked',
    );

    return {
      student: studentName,
      courseId,
      enrollments,
      notification,
    };
  }
}
