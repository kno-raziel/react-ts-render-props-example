import React, { Component } from 'react';
import { render } from 'react-dom';

import MouseWithRenderProp from './app/MouseWithRenderProp';
import MouseWithChildrenAsRenderProp from './app/MouseWithChildrenAsRenderProp';
import Cat from './app/Cat';

import withMouseHOC from './app/withMouseHOC';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MouseWithRenderProp render={(mouse) => <Cat mouse={mouse} />} />
        <MouseWithChildrenAsRenderProp>
          {(mouse) => <Cat mouse={mouse} />}
        </MouseWithChildrenAsRenderProp>

        {withMouseHOC(Cat)}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
