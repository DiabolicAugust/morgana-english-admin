import { Fields, Models } from './enums.js';

export const Strings = {
  fieldMustNotBeEmpty: (field: Fields) => `${field} must be not empty!`,
  fieldMustBeString: (field: Fields) => `${field} must be string`,

  modelNotCreated: (model: Models) =>
    `Something went wrong and ${model} was not created!`,

  noUnusedModelLeft: (model: Models) =>
    `There is no unused ${model} left in database! Add a new group of ${model} as soon as possible!`,

  sentenceOptionsValidation:
    'Options must only contain keys a, b, and c with string values',
};
