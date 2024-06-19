import React, { type FC } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import type { IIconProps } from '../../../types';

const Icon: FC<IIconProps> = ({ color, name, size, rotate }) => (
  <MaterialCommunityIcons
    name={name}
    color={color}
    size={size}
    style={{ transform: rotate ? [{ rotateY: `${rotate}deg` }] : [] }}
  />
);

export default Icon;
