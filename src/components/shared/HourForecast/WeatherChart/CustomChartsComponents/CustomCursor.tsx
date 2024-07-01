import React from 'react';

const CustomCursor = ({ points, width, height, stroke }: any & { height?: number }) => {
    const { x, y } = points[0];
    return (
      <g>
        <line
          x1={x}
          y1={y - 5}
          x2={x}
          y2={y + height}
          stroke={stroke}
          strokeDasharray="3 3"
        />
      </g>
    );
  };
export default CustomCursor;
