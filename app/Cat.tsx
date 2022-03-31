import React from 'react';
import { MousePosition } from './types';

const Cat: React.FC<MousePosition> = ({ mouse }: { mouse: MousePosition }) => {
  return (
    <img
      src="https://raw.githubusercontent.com/kno-raziel/react-ts-render-props-example/master/assets/cat.png"
      style={{ position: 'absolute', left: mouse.x, top: mouse.y }}
    />
  );
};

export default Cat;
