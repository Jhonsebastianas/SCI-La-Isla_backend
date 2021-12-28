import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { ManagerException } from './maganer.exception';

/**
 * Unified Handling of Business Exceptions
 */
@Catch(ManagerException)
export class ManagerExceptionFilter implements ExceptionFilter {
    catch(exception: ManagerException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        response.json({ code: exception.getCode(), message: exception.getMessage() });
        console.error(// tslint:disable-line
            `BusinessException code: %s message:%s \n%s `,
            exception.getCode(),
            exception.getMessage(),
            exception.getDetail());
    }
}