import React from 'react';
import { render } from '@testing-library/react';

import { useStripes } from '@folio/stripes/core';
import { ControlledVocab } from '@folio/stripes/smart-components';

import NoteTypesSettings from './note-types-settings';

const renderNoteTypesSettings = ({ stripes }) => render(
  <NoteTypesSettings
    stripes={stripes}
  />
);

describe('Given NoteTypesSettings', () => {
  let stripes;

  beforeEach(() => {
    ControlledVocab.mockClear();

    stripes = useStripes();
  });

  it('should render ConnectedControlledVocab component', async () => {
    renderNoteTypesSettings({ stripes });

    expect(ControlledVocab).toHaveBeenCalled();
  });

  it('should render correct label', async () => {
    const { getByText } = renderNoteTypesSettings({ stripes });

    expect(getByText('ui-notes.settings.noteTypes')).toBeDefined();
  });
});
