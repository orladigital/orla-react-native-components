import React, {FC} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IconProps {
  color: string;
  name: string;
  size: number;
  rotate?: number;
}

const Icon: FC<IconProps> = ({color, name, size, rotate}) => (
  <MaterialCommunityIcons
    name={name}
    color={color}
    size={size}
    style={{transform: rotate ? [{rotateY: `${rotate}deg`}] : []}}
  />
);

export default Icon;
