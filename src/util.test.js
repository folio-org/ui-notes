import React from 'react';
import { FormattedMessage } from 'react-intl';

import {
  getErrorMessage,
  NOTE_TYPES_LIMIT_REACHED_ERROR,
  validate,
} from './util';

const fieldName = 'name';

describe('Notes utils', () => {
  describe('validate', () => {
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

  describe('getErrorMessage', () => {
    describe('when error is due to limit reached', () => {
      it('should return a correct error object', async () => {
        const errors = [{
          code: NOTE_TYPES_LIMIT_REACHED_ERROR,
          parameters: [{
            key: 'limit',
            value: 25,
          }],
        }];

        expect(getErrorMessage(errors)).toEqual({
          fieldErrors: [],
          commonErrors: [expect.any(Object)],
        });
      });
    });

    describe('when error is due to another reason', () => {
      it('should return empty errors', async () => {
        const errors = [{
          code: 'unknown',
          parameters: [],
        }];

        expect(getErrorMessage(errors)).toEqual({
          fieldErrors: [],
          commonErrors: [],
        });
      });
    });
  });
});
