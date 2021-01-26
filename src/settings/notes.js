import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
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
  const pages = [
    {
      route: 'general',
      label: <FormattedMessage id="ui-notes.settings.general" />,
      component: NoteTypesSettings,
    },
  ];

  return (
    <Settings
      location={location}
      match={match}
      stripes={stripes}
      pages={pages}
      paneTitle={<FormattedMessage id="ui-notes.settings.index.paneTitle" />}
    />
  );
};

Notes.propTypes = propTypes;

export default Notes;
