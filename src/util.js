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

export const handleCreateFail = (res, sendCallout) => {
  res.json().then(body => {
    const error = body?.errors?.[0];

    if (!error) {
      return;
    }

    if (error.code === NOTE_TYPES_LIMIT_REACHED_ERROR) {
      const limit = error.parameters.find(param => param.key === 'limit');
      sendCallout({
        type: 'error',
        message: <FormattedMessage id="ui-notes.settings.maxAmount" values={{ amount: limit?.value }} />,
      });
    }
  });
};
