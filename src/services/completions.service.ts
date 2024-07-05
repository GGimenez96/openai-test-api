import OpenAI from 'openai';
import { openAiApiService } from '@/services';
import logger from '@/utils/logger';

class CompletionsService {
  async generateCompletion(
    messages: OpenAI.ChatCompletionMessageParam[],
    model: OpenAI.ChatModel = 'gpt-3.5-turbo',
    temperature = 1
  ) {
    try {
      return await openAiApiService.createChatCompletion(messages, model, temperature);
    } catch (error) {
      logger.error('Error at CompletionsService.generateCompletion', error);
      throw error;
    }
  }
}

export default CompletionsService;
