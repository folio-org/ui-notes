import React from 'react';

jest.mock('@folio/stripes/smart-components', () => ({
  ...jest.requireActual('@folio/stripes/smart-components'),
  //ControlledVocab: () => <div>ControlledVocab</div>,
  //Settings: props => <div>Settings</div>
}), { virtual: true });