import TestController from './test.controller';
import { testService } from '../services';

const testController = new TestController(testService);

export { testController };
