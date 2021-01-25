import React from 'react';
import { render, cleanup } from '@testing-library/react';

import NoteTypesSettings from './note-types-settings';

const renderNotesTypesSettings = () => (render(
  <NoteTypesSettings
    stripes={{ connect: jest.fn(component => component) }}
  />
));

describe('Note Type Settings', () => {
  afterEach(cleanup);

  it('Than it should display record status', () => {
    const { getByText } = renderNotesTypesSettings();
  
    expect(getByText('ui-quick-marc.record.status.current', { exact: false })).toBeDefined();
  });
});
