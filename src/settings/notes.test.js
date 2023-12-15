import React from 'react';
import { render } from '@folio/jest-config-stripes/testing-library/react';

import { TitleManager } from '@folio/stripes/core';
import { Settings } from '@folio/stripes/smart-components';

import Notes from './notes';

const paneTitleId = 'ui-notes.settings.index.paneTitle';
const route = 'general';
const labelId = 'ui-notes.settings.general';

const renderNotes = ({
  location = { pathname: '/' },
  match = {},
  stripes = {},
} = {}) => (render(
  <Notes
    location={location}
    match={match}
    stripes={stripes}
  />,
));

describe('Given Notes Settings', () => {
  beforeEach(() => {
    Settings.mockClear();
  });

  it('should render Settings component', async () => {
    renderNotes();

    expect(Settings).toHaveBeenCalled();
  });

  it('should render correct pane title', async () => {
    const { getByText } = renderNotes();

    expect(getByText(paneTitleId)).toBeDefined();
  });

  it('should has pages prop', async () => {
    const { getByText } = renderNotes();

    expect(getByText(route)).toBeDefined();
    expect(getByText(labelId)).toBeDefined();
  });

  describe('when user is on any setting page', () => {
    it('should display correct HTML page title', () => {
      renderNotes();

      expect(TitleManager).toHaveBeenCalledWith(expect.objectContaining({
        page: 'ui-notes.settings.label',
      }), {});
    });
  });
});
