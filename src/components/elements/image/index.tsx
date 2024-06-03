import React, { type FC } from 'react';

import * as Styles from './styles';

export interface ImageProps {
  path: any;
  height?: string | number;
  width?: string | number;
}

const Image: FC<ImageProps> = ({ path, height, width }) => {
  return (
    <Styles.Image
      source={path}
      height={height as number}
      width={width as number}
    />
  );
};

export default Image;
