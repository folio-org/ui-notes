import React from 'react';
import PropTypes from 'prop-types';
import {
  FormattedMessage,
  useIntl,
} from 'react-intl';
import { get } from 'lodash';

import { ControlledVocab } from '@folio/stripes/smart-components';
import { validate } from '../util';

const propTypes = {
  stripes: PropTypes.shape({
    connect: PropTypes.func.isRequired,
  }).isRequired,
};

const NoteTypesSettings = ({ stripes }) => {
  const { formatMessage } = useIntl();
  const ConnectedControlledVocab = stripes.connect(ControlledVocab);

  const label = formatMessage({ id: 'ui-notes.settings.noteType' });

  const validateName = (item, index, items) => {
    return validate(item, index, items, 'name', label);
  };

  const suppressDelete = noteType => get(noteType, 'usage.isAssigned');

  const suppressEdit = () => false;

  return (
    <ConnectedControlledVocab
      stripes={stripes}
      baseUrl="note-types"
      records="noteTypes"
      validate={validateName}
      label={formatMessage({ id: 'ui-notes.settings.noteTypes' })}
      translations={{
        deleteEntry: 'ui-notes.settings.noteTypes.deleteEntry',
        termDeleted: 'ui-notes.settings.noteTypes.termDeleted',
        termWillBeDeleted: 'ui-notes.settings.noteTypes.termWillBeDeleted',
      }}
      objectLabel={<FormattedMessage id="ui-notes.settings.notes" />}
      visibleFields={['name']}
      hiddenFields={['lastUpdated', 'numberOfObjects']}
      actionSuppressor={{
        edit: suppressEdit,
        delete: suppressDelete
      }}
      columnMapping={{
        name: label
      }}
      nameKey="name"
      id="noteTypes"
      sortby="name"
    />
  );
};

NoteTypesSettings.propTypes = propTypes;

export default NoteTypesSettings;
