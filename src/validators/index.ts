import * as messageBoardValidationSchemas from './messageBoardValidationSchemas';
import * as averageNumbersValidationSchemas from './averageNumbersValidationSchemas';

export * from './validateMiddleware';

export const validators = {
  messageBoardValidationSchemas,
  averageNumbersValidationSchemas,
};
