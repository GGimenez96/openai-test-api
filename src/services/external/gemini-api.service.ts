import { GenerationConfig, GoogleGenerativeAI, ResponseSchema } from '@google/generative-ai';
import config from '@/config';
import { GeminiModels } from '@/models/enums/gemini-models';
import { FileGeminiSchema } from '@/models';

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
      generationConfig: this.getGenerationConfig(jsonMode),
      systemInstruction:
        'You are an assistant for an app that serves as an address book for a user.  The app follows a structure of folders and files where each folder is either an Address or Social folder. Address folders are meant to store Crypto or Fiat addresses for different blockchains and banks. Social folders are meant to store social addresses or links to social networks or messaging apps like WhatsApp or Instagram. Each address inside a folder is represented as a file. A user will ask you to generate files based on their needs.',
    });
    // const curatedPrompt = prompt.toLowerCase() === 'testjson' && jsonMode ? this.testJsonPrompt : prompt;
    const result = await genModel.generateContent(prompt);
    return {
      content: result.response.text(),
      usageMetadata: result.response.usageMetadata,
      json: jsonMode ? JSON.parse(result.response.text()) : undefined,
    };
  }

  getGenerationConfig(jsonMode: boolean): GenerationConfig {
    const generationConfig: GenerationConfig = {
      responseMimeType: 'text/plain',
    };
    if (jsonMode) {
      generationConfig.responseMimeType = 'application/json';
      generationConfig.responseSchema = FileGeminiSchema as unknown as ResponseSchema;
    }
    return generationConfig;
  }
}

export default GeminiApiService;
