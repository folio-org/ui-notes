import React from 'react';
import { FormattedMessage } from 'react-intl';

const isDuplicateStrings = (str1, str2) => {
  return (str1 || '').localeCompare(str2, undefined, { sensitivity: 'base' }) === 0;
};

// eslint-disable-next-line import/prefer-default-export
export function validate(item, index, items, field, label) {
  const error = {};

  for (let i = 0; i < items.length; i++) {
    const obj = items[i];
    const isDuplicate = index !== i && isDuplicateStrings(obj[field], item[field]);

    if (isDuplicate) {
      error[field] = (
        <FormattedMessage
          id="ui-notes.settings.duplicated"
          values={{ field: label }}
        />
      );
    }
  }

  return error;
}

export const NOTE_TYPES_LIMIT_REACHED_ERROR = 'NOTE_TYPES_LIMIT_REACHED';

export const getErrorMessage = (errors) => {
  const error = errors?.[0];

  const emptyErrors = {
    fieldErrors: [],
    commonErrors: [],
  };

  if (!error) {
    return emptyErrors;
  }

  if (error.code === NOTE_TYPES_LIMIT_REACHED_ERROR) {
    const limit = error.parameters.find(param => param.key === 'limit');

    return {
      fieldErrors: [],
      commonErrors: [<FormattedMessage id="ui-notes.settings.maxAmount" values={{ amount: limit?.value }} />],
    };
  }

  return emptyErrors;
};
