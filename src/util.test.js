import React from 'react';
import { FormattedMessage } from 'react-intl';

import { waitFor } from '@folio/jest-config-stripes/testing-library/react';

import {
  handleCreateFail,
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

  describe('handleCreateFail', () => {
    describe('when error is due to limit reached', () => {
      it('should show a callout message', async () => {
        const res = {
          json: jest.fn().mockResolvedValue({
            errors: [{
              code: NOTE_TYPES_LIMIT_REACHED_ERROR,
              parameters: [{
                key: 'limit',
                value: 25,
              }],
            }],
          }),
        };

        const sendCallout = jest.fn();

        handleCreateFail(res, sendCallout);

        await waitFor(() => expect(sendCallout).toHaveBeenCalledWith(expect.objectContaining({
          type: 'error',
        })));
      });
    });

    describe('when error is due to another reason', () => {
      it('should not show the callout message', async () => {
        const res = {
          json: jest.fn().mockResolvedValue({
            errors: [{
              code: 'unknown',
              parameters: [],
            }],
          }),
        };

        const sendCallout = jest.fn();

        handleCreateFail(res, sendCallout);

        await waitFor(() => expect(sendCallout).not.toHaveBeenCalledWith());
      });
    });
  });
});
