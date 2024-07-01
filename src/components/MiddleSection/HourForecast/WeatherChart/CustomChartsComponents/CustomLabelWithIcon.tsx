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
      {/* <Text size='xs'>{value}</Text> */}
    </foreignObject>
  );
/* 
  const iconClass = iconMapping[iconKey];

  return (
    <foreignObject x={x} y={y} width={24} height={24}>
      <div className="flex flex-col items-center">
        <div className={`text-xs text-white`} style={{ marginTop: '-1.5rem' }}>{value}</div>
        <i className={`text-2xl text-white ${iconClass}`} />
      </div>
    </foreignObject>
  ); */
};

export default CustomLabelWithIcon;
