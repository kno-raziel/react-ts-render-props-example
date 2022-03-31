import React, { MouseEvent, useState } from 'react';
import { MousePosition } from './types';

type MouseProps = {
  render: (mouse: MousePosition) => React.ReactNode;
};

const Mouse: React.FC<MouseProps> = ({ render }) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event;
    event.persist(); // https://reactjs.org/docs/legacy-event-pooling.html
    setMousePosition((_oldState) => ({
      x: clientX,
      y: clientY - currentTarget.getBoundingClientRect().top,
    }));
  };

  return (
    <div>
      <h2>Mouse With Render Prop</h2>
      <div
        style={{
          position: 'relative',
          height: '80vh',
          border: '1px solid red',
          marginBottom: '50px',
        }}
        onMouseMove={handleMouseMove}
      >
        {render(mousePosition)}
      </div>
    </div>
  );
};

export default Mouse;
