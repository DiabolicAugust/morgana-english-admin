import { Fields, Models } from './enums.js';

export const Strings = {
  fieldMustNotBeEmpty: (field: Fields) => `${field} must be not empty!`,
  fieldMustBeString: (field: Fields) => `${field} must be string`,

  modelNotCreated: (model: Models) =>
    `Something went wrong and ${model} was not created!`,

  noUnusedDayWordsLeft:
    'There is no unused daywords left in database! Add a new group of daywords as soon as possible!',
};
