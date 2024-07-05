import CompletionsController from './completions.controller';
import { completionsService } from '../services';

const completionsController = new CompletionsController(completionsService);

export { completionsController };
