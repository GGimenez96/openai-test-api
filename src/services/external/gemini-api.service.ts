import { GoogleGenerativeAI } from '@google/generative-ai';
import config from '@/config';
import { GeminiModels } from '@/models/enums/gemini-models';

class GeminiApiService {
  private genAI: GoogleGenerativeAI;

  private testJsonSchema = `
  { "type": "object",
    "properties": {
      "firstName": { "type": "string" },
      "lastName": { "type": "string" },
      "age": { "type" : "number" },
      "email": { "type" : "string" }
    }
  }`;

  private testJsonPrompt = `Generate a random user using this JSON schema: ${this.testJsonSchema}`;

  constructor() {
    this.genAI = new GoogleGenerativeAI(config.GOOGLE_API_KEY);
  }

  /**
   * Asynchronously generates content using the Google Generative AI API.
   *
   * @param prompt - The prompt to generate content from.
   * @param jsonMode - Whether to return the content as JSON.
   * @return The generated content.
   */
  async generateContent(prompt: string, model = GeminiModels.GEMINI_1_5_FLASH, jsonMode = false) {
    const genModel = this.genAI.getGenerativeModel({
      model,
      generationConfig: { responseMimeType: jsonMode ? 'application/json' : 'text/plain' },
    });
    const curatedPrompt = prompt.toLowerCase() === 'testjson' && jsonMode ? this.testJsonPrompt : prompt;
    const result = await genModel.generateContent(curatedPrompt);
    return {
      content: result.response.text(),
      usageMetadata: result.response.usageMetadata,
      json: jsonMode ? JSON.parse(result.response.text()) : undefined,
    };
  }
}

export default GeminiApiService;
