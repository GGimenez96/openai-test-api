import { FunctionDeclarationSchemaType } from '@google/generative-ai';

export const FileGeminiSchema = {
  type: FunctionDeclarationSchemaType.ARRAY,
  items: {
    type: FunctionDeclarationSchemaType.OBJECT,
    properties: {
      variant: {
        type: FunctionDeclarationSchemaType.STRING,
        enum: ['crypto', 'fiat', 'messaging', 'social-media'],
      },
      entity: {
        type: FunctionDeclarationSchemaType.OBJECT,
        properties: {
          color: { type: FunctionDeclarationSchemaType.STRING },
          icon: {
            type: FunctionDeclarationSchemaType.STRING,
            enum: ['btc', 'eth', 'matic', 'dot', 'algo', 'sol', 'trx', 'bsc', 'avax', 'gno', 'ada', 'atom'],
          },
          value: {
            type: FunctionDeclarationSchemaType.STRING,
            enum: ['BTC', 'ETH', 'MATIC', 'DOT', 'ALGO', 'SOL', 'TRX', 'BSC', 'AVAX', 'GNO', 'ADA', 'ATOM'],
          },
          label: { type: FunctionDeclarationSchemaType.STRING },
          validationRegex: {
            type: FunctionDeclarationSchemaType.OBJECT,
            properties: { regex: { type: FunctionDeclarationSchemaType.STRING } },
          },
          defaultTags: {
            type: FunctionDeclarationSchemaType.ARRAY,
            items: { type: FunctionDeclarationSchemaType.STRING },
          },
        },
        required: ['color', 'icon', 'value', 'label', 'validationRegex', 'defaultTags'],
      },
      address: { type: FunctionDeclarationSchemaType.STRING },
      name: { type: FunctionDeclarationSchemaType.STRING },
      alias: { type: FunctionDeclarationSchemaType.STRING },
      notes: { type: FunctionDeclarationSchemaType.STRING },
      id: { type: FunctionDeclarationSchemaType.STRING },
      tags: {
        type: FunctionDeclarationSchemaType.ARRAY,
        items: { type: FunctionDeclarationSchemaType.STRING },
      },
    },
    required: ['variant', 'entity', 'address', 'name', 'id', 'alias', 'notes', 'tags'],
  },
};
