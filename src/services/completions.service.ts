import OpenAI from 'openai';
import { geminiApiService, openAiApiService } from '@/services';
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

  async generateGeminiCompletion(prompt: string, jsonMode = false) {
    try {
      return await geminiApiService.generateContent(prompt, jsonMode);
    } catch (error) {
      logger.error('Error at CompletionsService.generateGeminiCompletion', error);
      throw error;
    }
  }
}

export default CompletionsService;
