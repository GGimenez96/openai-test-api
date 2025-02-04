import { NextFunction, Request, Response } from 'express';
import CompletionsService from '../services/completions.service';
import { prepareResponse } from '@/utils/api-response';

class CompletionsController {
  constructor(private readonly completionsService: CompletionsService) {}

  generateCompletion = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { messages, model, temperature, jsonMode } = req.body;
      const data = await this.completionsService.generateCompletion(messages, model, temperature, jsonMode);
      return res.json(prepareResponse(200, null, data));
    } catch (err) {
      return next(err);
    }
  };

  generateGeminiCompletion = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { prompt, jsonMode, model } = req.body;
      const data = await this.completionsService.generateGeminiCompletion(prompt, model, jsonMode);
      return res.json(prepareResponse(200, null, data));
    } catch (err) {
      return next(err);
    }
  };
}

export default CompletionsController;
