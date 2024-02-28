import React, { useState } from 'react';
import { Resizable, ResizeCallbackData } from 'react-resizable';
import "../App.css"

const CodeEditor = () => {
  const [width, setWidth] = useState<number>(700);
  const [height, setHeight] = useState<number>(200);

  const onResize = (event: React.SyntheticEvent, { size }: ResizeCallbackData) => {
    setWidth(size.width);
    setHeight(size.height);
  };

  return (
    <Resizable
      width={width}
      height={height}
      resizeHandles={["e"]}
      minConstraints={[0,0]}
      maxConstraints={[900,0]}
      onResize={onResize}
    >
      <div style={{ width: `${width}px`, height: `100%`}} className='bg-blue-600'>
        Resizable Content
      </div>
    </Resizable>
  );
};

export default CodeEditor;
