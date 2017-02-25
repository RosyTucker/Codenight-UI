import { StyleRoot } from 'radium';

import { React, Enzyme, expect } from './TestHelpers';
import App from '../src/client/js/App';
import AppRouter from '../src/client/js/navigation/AppRouter';

describe('<App />', () => {
  let app;

  beforeEach(() => {
    app = Enzyme.shallow(<App />);
  });

  it('contains the style root', () => {
    // The index  important here, as we want to make sure everything is in the root
    expect(app.children()).to.have.length(1);
    expect(app.childAt(0).type()).to.equal(StyleRoot);
  });

  it('contains a router within the style root', () => {
    const styleRoot = app.childAt(0);
    expect(styleRoot.find(AppRouter)).to.have.length(1);
  });
});
