import React from 'react';
import { FormattedMessage } from 'react-intl';

import { validate } from './util';

const fieldName = 'name';

describe('Notes utils', () => {
  describe('validate', () => {
    it('should return length error message when items length more then 20', () => {
      const items = new Array(21);

      expect(validate(items[0], 0, items, fieldName, 'label')).toStrictEqual({
        [fieldName]: <FormattedMessage
          id='ui-notes.settings.maxAmount'
          values={{ 'amount': 20 }}
        />,
      });
    });

    it('should return error message when note is duplicated', () => {
      const items = [{
        name: 'note 1',
      }, {
        name: 'note 2',
      }];

      expect(validate(items[0], 3, items, fieldName, 'label')).toStrictEqual({
        [fieldName]: <FormattedMessage
          id='ui-notes.settings.duplicated'
          values={{ 'field': 'label' }}
        />,
      });
    });

    it('should not return error message when note is valid', () => {
      const items = [{
        name: 'note 1',
      }, {
        name: 'note 2',
      }];

      expect(validate(items[0], 0, items, fieldName, 'label')).toStrictEqual({});
    });
  });
});
