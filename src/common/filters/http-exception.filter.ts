import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionFilter.name);
  catch(exception: unknown, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorMsg: any =
      exception instanceof HttpException ? exception.getResponse() : exception;

    this.logger.error(
      `Http Status ${status} Error Message: ${JSON.stringify(errorMsg)}`,
    );

    response.status(status).json({
      timestamp: new Date().toISOString(),
      path: request.url,
      error: {
        message: errorMsg.message,
        value: errorMsg.value,
        path: errorMsg.path,
        reason: errorMsg.reason,
      },
    });
  }
}
