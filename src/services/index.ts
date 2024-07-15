import GeminiApiService from '@/services/external/gemini-api.service';
import OpenAiApiService from '@/services/external/open-ai-api.service';
import CompletionsService from './completions.service';

const completionsService = new CompletionsService();
const openAiApiService = new OpenAiApiService();
const geminiApiService = new GeminiApiService();

export { completionsService, openAiApiService, geminiApiService };
