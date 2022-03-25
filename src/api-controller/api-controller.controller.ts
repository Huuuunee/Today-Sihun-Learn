import { Controller, Get } from '@nestjs/common';

@Controller({ host: 'api.localhost' })
export class ApiControllerController {
  @Get()
  index(): string {
    return 'Hello, API';
  }
}
