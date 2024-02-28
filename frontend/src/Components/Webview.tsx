import React, { useState } from 'react';
import { Resizable, ResizeCallbackData } from 'react-resizable';
import "../App.css"

const Webview = () => {
  const [width, setWidth] = useState<number>(200);
  const [height, setHeight] = useState<number>(500);

  const onResize = (event: React.SyntheticEvent, { size }: ResizeCallbackData) => {
    setWidth(size.width);
    setHeight(size.height);
  };

  return (
    <Resizable
      width={width}
      height={height}
      resizeHandles={["s"]}
      minConstraints={[0,0]}
      onResize={onResize}
    >
      <div style={{ width: `100%`, height: `${height}px`}} className='bg-red-600'>
        Webview
      </div>
    </Resizable>
  );
};

export default Webview;
