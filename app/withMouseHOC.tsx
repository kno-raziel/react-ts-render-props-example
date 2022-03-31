import React from 'react';

import MouseWithRenderProp from './MouseWithRenderProp'; 

const withMouse = (WrappedComponent: React.ComponentType) => {
  return (
    <MouseWithRenderProp
      render={(mouse) => <WrappedComponent mouse={mouse} />}
    />
  );
};

export default withMouse;
