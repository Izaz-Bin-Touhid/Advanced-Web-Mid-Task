import { Catch, PayloadTooLargeException } from '@nestjs/common';
import type { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import type { Response } from 'express';

@Catch(PayloadTooLargeException)
export class UploadSizeFilter implements ExceptionFilter {
  catch(_exception: PayloadTooLargeException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();

    response.status(400).json({
      statusCode: 400,
      message: 'File size must not exceed 2MB',
      error: 'Bad Request',
    });
  }
}
