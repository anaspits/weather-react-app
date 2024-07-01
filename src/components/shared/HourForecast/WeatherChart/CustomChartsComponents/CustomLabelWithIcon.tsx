import React from 'react';
import IconCloudyNight from '../IconsForChartComponents/IconCloudyNight';
import IconNight from '../IconsForChartComponents/IconNight';
import IconStorm from '../IconsForChartComponents/IconStorm';
import IconStormyNight from '../IconsForChartComponents/IconStormyNight';

const iconsMap: any = {
  cloudyNight: <IconCloudyNight size={24} color="white" />,
  night: <IconNight size={24} color="white" />,
  strormyNight: <IconStormyNight size={24} color="white" />,
  storm: <IconStorm size={24} color="white" />
};

const CustomLabelWithIcon = (props: any) => {
  const { x, y, value } = props; 
  return (
    <foreignObject x={x - 12} y={y + 30} width="100" height="100">
      {iconsMap[value]}
    </foreignObject>
  );
};

export default CustomLabelWithIcon;
