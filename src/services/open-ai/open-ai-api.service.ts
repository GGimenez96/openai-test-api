import OpenAI from 'openai';
import config from '@/config';

class OpenAiApiService {
  openAi: OpenAI;

  constructor() {
    this.openAi = new OpenAI({ apiKey: config.OPENAI_API_KEY });
  }

  /**
   * Asynchronously creates a chat completion using the OpenAI API.
   *
   * @param messages - An array of chat completion messages.
   * @param model - The model to use for the chat completion. Defaults to 'gpt-3.5-turbo'.
   * @param temperature - The temperature value for the chat completion. Defaults to 1 and ranges from 0 to 2.
   * @return A promise that resolves with the chat completion response.
   */
  async createChatCompletion(
    messages: OpenAI.ChatCompletionMessageParam[],
    model: OpenAI.ChatModel = 'gpt-3.5-turbo',
    temperature: number = 1
  ) {
    const completion = await this.openAi.chat.completions.create({
      messages,
      model,
      temperature,
    });
    return completion;
  }
}

export default OpenAiApiService;
