import React from 'react';
import { render } from '@folio/jest-config-stripes/testing-library/react';

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

  it('should render ConnectedControlledVocab component with correct props', () => {
    const expectedProps = {
      stripes,
      baseUrl: 'note-types',
      records: 'noteTypes',
      label: 'ui-notes.settings.noteTypes',
      translations: {
        deleteEntry: 'ui-notes.settings.noteTypes.deleteEntry',
        termDeleted: 'ui-notes.settings.noteTypes.termDeleted',
        termWillBeDeleted: 'ui-notes.settings.noteTypes.termWillBeDeleted',
      },
      visibleFields: ['name'],
      hiddenFields: ['lastUpdated', 'numberOfObjects'],
      nameKey: 'name',
      id: 'noteTypes',
      sortby: 'name',
    };

    renderNoteTypesSettings({ stripes });
    expect(ControlledVocab).toHaveBeenNthCalledWith(1, expect.objectContaining(expectedProps), {});
  });

  it('should have correct suppressDelete function', () => {
    const noteType = {
      usage: { isAssigned: true },
    };
    renderNoteTypesSettings({ stripes });
    expect(ControlledVocab.mock.calls[0][0].actionSuppressor.delete(noteType)).toBeTruthy();
  });
});
