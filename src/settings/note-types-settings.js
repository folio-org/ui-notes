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

  const validateName = (item, index, items) => {
    const label = formatMessage({ id: 'ui-notes.settings.noteType' });

    return validate(item, index, items, 'name', label);
  }

  const suppressDelete = noteType => get(noteType, 'usage.noteTotal') > 0;
  const suppressEdit = () => false;

  const label = formatMessage({ id: 'ui-notes.settings.noteType' });

  return (
    <ConnectedControlledVocab
      stripes={stripes}
      baseUrl="note-types"
      records="noteTypes"
      validate={validateName}
      label={formatMessage({ id: 'ui-notes.settings.noteTypes' })}
      labelSingular={label}
      objectLabel={<FormattedMessage id="ui-notes.settings.notes" />}
      visibleFields={['name']}
      hiddenFields={['lastUpdated']}
      formatter={{ 'numberOfObjects': (item) => get(item, 'usage.noteTotal') }}
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
