import React from 'react';
import PropTypes from 'prop-types';
import {
  FormattedMessage,
  useIntl,
} from 'react-intl';
import { get } from 'lodash';

import {
  TitleManager,
  useCallout,
} from '@folio/stripes/core';
import { ControlledVocab } from '@folio/stripes/smart-components';

import {
  getErrorMessage,
  validate,
} from '../util';

const propTypes = {
  stripes: PropTypes.shape({
    connect: PropTypes.func.isRequired,
    hasPerm: PropTypes.func.isRequired,
  }).isRequired,
};

const NoteTypesSettings = ({ stripes }) => {
  const { formatMessage } = useIntl();
  const callout = useCallout();
  const ConnectedControlledVocab = stripes.connect(ControlledVocab);

  const paneTitle = formatMessage({ id: 'ui-notes.settings.noteTypes' });
  const label = formatMessage({ id: 'ui-notes.settings.noteType' });

  const validateName = (item, index, items) => {
    return validate(item, index, items, 'name', label);
  };
  const canEdit = stripes.hasPerm('ui-notes.settings.edit');

  const suppressDelete = noteType => {
    return !canEdit || get(noteType, 'usage.isAssigned');
  };

  const suppressEdit = () => !canEdit;

  return (
    <TitleManager record={paneTitle}>
      <ConnectedControlledVocab
        stripes={stripes}
        baseUrl="note-types"
        records="noteTypes"
        validate={validateName}
        label={paneTitle}
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
        canCreate={canEdit}
        getCustomErrorMessages={getErrorMessage}
        nameKey="name"
        id="noteTypes"
        sortby="name"
      />
    </TitleManager>
  );
};

NoteTypesSettings.propTypes = propTypes;

export default NoteTypesSettings;
