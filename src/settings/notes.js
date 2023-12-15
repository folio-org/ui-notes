import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';

import { TitleManager } from '@folio/stripes/core';
import { Settings } from '@folio/stripes/smart-components';
import NoteTypesSettings from './note-types-settings';

const propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  stripes: PropTypes.object.isRequired,
};

const Notes = ({
  location,
  match,
  stripes,
}) => {
  const intl = useIntl();
  const pages = [
    {
      route: 'general',
      label: intl.formatMessage({ id: 'ui-notes.settings.general' }),
      component: NoteTypesSettings,
    },
  ];

  return (
    <TitleManager
      page={intl.formatMessage({ id: 'ui-notes.settings.label' })}
    >
      <Settings
        location={location}
        match={match}
        stripes={stripes}
        pages={pages}
        paneTitle={<FormattedMessage id="ui-notes.settings.index.paneTitle" />}
      />
    </TitleManager>
  );
};

Notes.propTypes = propTypes;

export default Notes;
