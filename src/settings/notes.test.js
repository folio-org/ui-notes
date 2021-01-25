import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Notes from './notes';

const renderNotes = () => (render(
  <Notes
    stripes={{ connect: jest.fn(component => component) }}
    location={{}}
    match={{}}
  />
));

describe('Note Type Settings', () => {
  afterEach(cleanup);

  it('Than it should display record status', () => {
    const { getByText } = renderNotes();
  
    expect(getByText('ui-quick-marc.record.status.current', { exact: false })).toBeDefined();
  });
});
