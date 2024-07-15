import { GoogleGenerativeAI } from '@google/generative-ai';
import config from '@/config';

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
  async generateContent(prompt: string, jsonMode = false) {
    const model = this.genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      generationConfig: { responseMimeType: jsonMode ? 'application/json' : 'text/plain' },
    });
    const curatedPrompt = prompt.toLowerCase() === 'testjson' && jsonMode ? this.testJsonPrompt : prompt;
    const result = await model.generateContent(curatedPrompt);
    return {
      content: result.response.text(),
      usageMetadata: result.response.usageMetadata,
      json: jsonMode ? JSON.parse(result.response.text()) : undefined,
    };
  }
}

export default GeminiApiService;
