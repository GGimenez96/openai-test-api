import OpenAiApiService from '@/services/open-ai/open-ai-api.service';
import CompletionsService from './completions.service';

const completionsService = new CompletionsService();
const openAiApiService = new OpenAiApiService();

export { completionsService, openAiApiService };
