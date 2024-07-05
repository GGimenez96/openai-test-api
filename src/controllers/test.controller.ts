import { NextFunction, Request, Response } from 'express';
import TestService from '../services/test.service';
import { prepareResponse } from '@/utils/api-response';

class TestController {
  constructor(private readonly testService: TestService) {}

  handleTest = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.testService.getUsersMock();
      return res.json(prepareResponse(200, null, data));
    } catch (err) {
      return next(err);
    }
  };
}

export default TestController;
