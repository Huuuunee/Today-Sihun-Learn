import { Test, TestingModule } from '@nestjs/testing';
import { ApiControllerController } from './api-controller.controller';

describe('ApiControllerController', () => {
  let controller: ApiControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiControllerController],
    }).compile();

    controller = module.get<ApiControllerController>(ApiControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
